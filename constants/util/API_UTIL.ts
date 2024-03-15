import axios, { AxiosResponse } from "axios";
// import { getCookie, setCookie } from "cookies-next";
import { NextApiResponse } from "next";
import router from "next/router";
import { NextApiRequest } from "next/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertAction } from "store/modal/alert-slice";
import { spinnerAction } from "store/spinner/spinner-slice";
import { cookieStringToObject } from "./commUtil";

const BASE_URL = `${process.env.API_URL}`;

const AXIOS = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const useAxios = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);
  const fetchData = (url: string, data: object, isLoading: boolean | undefined) => {
    if (!!isLoading) {
      dispatch(spinnerAction.loading());
    }
    AXIOS.post(url, JSON.stringify(data))
      .then((res: any) => {
        console.log(res);
        if (res.status == "200" || url == "/api/tokenValidationCheck") {
          setCode(res.status);
          setResponse(res.data.data);
        } else if (res.data.responseCode == "401") {
          dispatch(alertAction.openModal({ cont: "권한이 없습니다." }));
          router.push("/nauth/login");
        } else {
          throw new Error(res?.data?.message || "오류가 발생 했습니다.");
        }
      })
      .catch((err) => {
        if (err?.response?.status) {
          console.log("error catch" + err);
        } else {
          console.log("useAxios err :: ", err);
          console.log(err?.response?.status);
          dispatch(alertAction.openModal({ cont: err?.message || "오류가 발생 했습니다." }));
        }
        router.push("/nauth/login");
      })
      .finally(() => {
        dispatch(spinnerAction.complete());
      });
  };

  return { code, response, fetchData };
};

export const BACK_API = async (url: String, req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { headers, body } = req;
    // 화면에서 넘어온 요청
    // req.header[`set-cookies`]에 값들이 있을꺼임

    console.log(`BACK_API req headers :: `, headers);
    console.log(`BACK_API req body :: `, body);
    console.log(`BACK_API BASE_URL :: `, BASE_URL);

    // const jwtTokenCookie = getCookie("jwtTokenCookie", { req, res });
    // const jwtRefreshTokenCookie = getCookie("jwtRefreshTokenCookie", { req, res });
    // const expiredTokenTimeCookie = getCookie("expiredTokenTimeCookie", { req, res });
    // const userEmailCookie = getCookie("userEmailCookie", { req, res });
    // // const userNicknameCookie = getCookie("userNicknameCookie", { req, res });

    // let cookie = "";
    // console.log(`BACK_API jwtTokenCookie :: `, jwtTokenCookie);
    // if (jwtTokenCookie) {
    //   // setCookie("jwtTokenCookie", jwtTokenCookie, { req, res, path: "/", maxAge: 60 * 60 * 30 });
    //   cookie += `jwtTokenCookie=${jwtTokenCookie};`;
    // }
    // if (jwtRefreshTokenCookie) {
    //   // setCookie("jwtRefreshTokenCookie", jwtRefreshTokenCookie, { req, res, maxAge: 60 * 60 * 30 });
    //   cookie += `jwtRefreshTokenCookie=${jwtRefreshTokenCookie};`;
    // }
    // if (expiredTokenTimeCookie) {
    //   // setCookie("expiredTokenTimeCookie", expiredTokenTimeCookie, { req, res, maxAge: 60 * 60 * 30 });
    //   cookie += `expiredTokenTimeCookie=${expiredTokenTimeCookie};`;
    // }
    // if (userEmailCookie) {
    //   // setCookie("userEmailCookie", userEmailCookie, { req, res, maxAge: 60 * 60 * 30 });
    //   cookie += `userEmailCookie=${userEmailCookie};`;
    // }
    // if (userNicknameCookie) {
    //   // setCookie("userNicknameCookie", userNicknameCookie, { req, res, maxAge: 60 * 60 * 30 });
    //   cookie += `userNicknameCookie=${userNicknameCookie};`;
    // }

    // 여기서 스프링 서버에 요청을 날려줌 (with cookies)
    const response: AxiosResponse<any, any> = await AXIOS.post(`${BASE_URL}${url}`, body, {
      headers: {
        // Cookie: cookie,
        // authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    });

    // console.log("header cookie check::: ", response.headers["set-cookie"]);
    let cookieObj: Array<any> = new Array(cookieStringToObject(response.headers["set-cookie"]));
    cookieObj = cookieObj[0]; // 윗 줄에서 new Array를 해서 그런지 결과가 새 배열에 다시 담겨옴.
    // console.log("BACK_API cookieObj :: ", cookieObj);
    if (cookieObj.length > 0) {
      res.setHeader("Set-Cookie", [
        `jwtTokenCookie=${cookieObj[0]?.jwtTokenCookie}; path=/; HttpOnly; Expires=${cookieObj[0]?.Expires};`,
        `jwtRefreshTokenCookie=${cookieObj[1]?.jwtRefreshTokenCookie}; path=/; HttpOnly; Expires=${cookieObj[1]?.Expires};`,
        `expiredTokenTimeCookie=${cookieObj[2]?.expiredTokenTimeCookie}; path=/; HttpOnly; Expires=${cookieObj[2]?.Expires};`,
        `userEmailCookie=${cookieObj[3]?.userEmailCookie}; path=/; Expires=${cookieObj[3]?.Expires};`,
        // `userNicknameCookie=${cookieObj[4]?.userNicknameCookie}; path=/; Expires=${cookieObj[4]?.Expires};`,
      ]);
    }
    console.log(`BACK_API response.data.data :: `, response.data.data);

    axios.defaults.headers.Authorization = "Bearer " + response.data.data.adminJwt;

    return {
      responseCode: response.data.responseCode,
      message: response.data.message,
      data: {
        ...response.data.data,
      },
    };
  } catch (error: any) {
    // 에러처리
    console.log(`BACK_API error :: `, error);
    return {
      responseCode: error?.response?.data?.responseCode || 500,
      message: error?.response?.data?.message || "BACK_API 미정의된 오류 발생.",
      data: error,
    };
  }
};
