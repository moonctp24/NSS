import axios, { AxiosResponse } from "axios";
import { NextApiResponse } from "next";
import router from "next/router";
import { NextApiRequest } from "next/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertAction } from "store/modal/alert-slice";
import { spinnerAction } from "store/spinner/spinner-slice";

export const useAxios = () => {
  let adminJwt = useSelector((state: any) => state.login.adminJwt);
  if (typeof window !== "undefined") {
    adminJwt = adminJwt ? adminJwt : localStorage.getItem("adminJwt");
  }

  const AXIOS = axios.create({
    withCredentials: true,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: adminJwt ? `Bearer ${adminJwt}` : "",
    },
  });

  const dispatch = useDispatch();
  const [code, setCode] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);
  const [message, setMessage] = useState("");
  const fetchData = (way: String, url: string, data: object | null, isLoading: boolean | undefined) => {
    if (!!isLoading) {
      dispatch(spinnerAction.loading());
    }
    if (way === "post") {
      AXIOS.post(url, JSON.stringify(data))
        .then((res: any) => {
          if (res.data.responseCode === "200" || res.data.responseCode === 200) {
            setCode(res.data.responseCode);
            setResponse(res.data.data);
            setMessage(res.data.message);
          } else if (res.data.responseCode === "500" || res.data.responseCode === 500) {
            // dispatch(alertAction.openModal({ cont: "권한이 없습니다." }));
            // router.push("/nauth/login");
            throw new Error(res?.data?.message || "오류가 발생 했습니다.");
          } else {
            throw new Error(res?.data?.message || "오류가 발생 했습니다.");
          }
        })
        .catch((err) => {
          if (err?.response?.status) {
            // console.log("error catch" + err);
          } else {
            dispatch(alertAction.openModal({ cont: err?.message || "오류가 발생 했습니다." }));
          }
          // router.push("/nauth/login");
        })
        .finally(() => {
          dispatch(spinnerAction.complete());
        });
    } else if (way === "get") {
      AXIOS.get(url, { params: data })
        .then((res: any) => {
          if (res.status === "200" || res.status === 200) {
            setCode(res.data.responseCode);
            setResponse(res.data.data);
          } else if (res.data.responseCode === "500" || res.data.responseCode === 500) {
            dispatch(alertAction.openModal({ cont: "권한이 없습니다." }));
            router.push("/nauth/login");
          } else {
            throw new Error(res?.data?.message || "오류가 발생 했습니다.");
          }
        })
        .catch((err) => {
          if (err?.response?.status) {
            // console.log("error catch" + err);
          } else {
            // console.log("useAxios err :: ", err);
            // console.log(err?.response?.status);
            dispatch(alertAction.openModal({ cont: err?.message || "오류가 발생 했습니다." }));
          }
          router.push("/nauth/login");
        })
        .finally(() => {
          dispatch(spinnerAction.complete());
        });
    }
  };

  return { code, response, message, fetchData };
};

export const BACK_API = async (way: String, url: String, req: NextApiRequest, res: NextApiResponse) => {
  const BASE_URL = `${process.env.API_URL}`;
  let adminJwt = "";
  if (typeof window !== "undefined") {
    adminJwt = localStorage.getItem("adminJwt") || "";
  }

  const AXIOS = axios.create({
    withCredentials: true,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: adminJwt ? `Bearer ${adminJwt}` : "",
    },
  });

  try {
    // 화면에서 넘어온 요청
    const { headers, body, query } = req;

    // console.log(`BACK_API req headers :: `, headers);
    // console.log(`BACK_API req body :: `, body);
    // console.log(`BACK_API BASE_URL :: `, BASE_URL);
    // console.log(`url check:: `, url);
    // console.log(`param check:: `, query);
    // console.log(`param check22:: `, Object.keys(query));
    // console.log(`param check33:: `, query.name);

    // get 통신 parameter 세팅
    let getParamSetting = "?";
    for (let q of Object.entries(query)) {
      getParamSetting += q[0] + "=" + q[1] + "&";
    }
    getParamSetting = getParamSetting.slice(0, -1);

    if (way === "POST") {
      const response: AxiosResponse<any, any> = await AXIOS.post(`${BASE_URL}${url}`, body, {
        headers: headers,
      });
      // console.log(`BACK_API response.data.data :: `, response.data.data);

      axios.defaults.headers.Authorization = "Bearer " + response.data.data.adminJwt;

      return {
        responseCode: response.data.responseCode,
        message: response.data.message,
        data: {
          ...response.data.data,
        },
      };
    } else {
      const response: AxiosResponse<any, any> = await AXIOS.get(`${BASE_URL}${url}${getParamSetting}`, { headers: headers });

      // console.log(`BACK_API response.data.data :: `, response);

      axios.defaults.headers.Authorization = "Bearer " + response.data.data.adminJwt;

      return {
        responseCode: response.data.responseCode,
        message: response.data.message,
        data: {
          ...response.data.data,
        },
      };
    }
  } catch (error: any) {
    // 에러처리
    // console.log(`BACK_API error :: `, error);
    return {
      responseCode: error?.response?.data?.responseCode || 500,
      message: error?.response?.data?.message || "BACK_API 미정의된 오류 발생.",
      data: error,
    };
  }
};
