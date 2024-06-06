import { useAxios } from "@/constants/util/API_UTIL";
import { loginAction } from "@/store/login/login-slice";
import { alertAction } from "@/store/modal/alert-slice";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const LoginComp = () => {
  const [emailInput, setEmailInput] = useState("test@email.com");
  const [passwordInput, setPasswordInput] = useState("test123!!");
  const { code, response, fetchData } = useAxios();
  // const [cookies, setCookie, removeCookie] = useCookies();

  const router = useRouter();

  const dispatch = useDispatch();

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  // 각 입력값에 대한 정합성 확인
  const validationCheck = () => {
    if (!emailInput) {
      dispatch(alertAction.openModal({ cont: "이메일이 입력되지 않았습니다" }));
      return false;
    }
    if (!passwordInput) {
      dispatch(alertAction.openModal({ cont: "비밀번호가 입력되지 않았습니다" }));
      return false;
    }
    return true;
  };

  // 비밀번호 입력 영역에서 Enter 키 누르면 자동 로그인 버튼 클릭로직
  const autoLoginHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      loginBtn();
    }
  };

  useEffect(() => {
    postResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, dispatch, router]);

  const postResult = useCallback(() => {
    console.log(`code :: ${code} / response :: `, response);
    // console.log("response.status::") + response?.status;
    if (response && code == "200") {
      dispatch(
        loginAction.login({
          isLogin: true,
          userEmail: response.adminEmail,
          userName: response.adminName,
          adminJwt: response.adminJwt,
        })
      );
      router.push("/");
    }
    // alert(response.status);
  }, [code, response, dispatch, router]);

  // 로그인 버튼 클릭 -> 로그인 로직 실행
  const loginBtn = async () => {
    // 정홥성 확인이 완료되면 '로그인'로직 실행
    if (validationCheck()) {
      let data = {
        userEmail: emailInput,
        password: passwordInput,
      };

      fetchData("post", "/api/nacct/login", data, true);
    }
  };
  return (
    <>
      <div className="w-full h-[1080px] overflow-hidden bg-[#00c1a6]">
        <div className="absolute top-1/2	left-1/2	-mt-[200px] -ml-[250px] w-[500px] h-[400px] bg-white/75">
          <div className="absolute top-1/2	left-1/2	-mt-[150px] -ml-[170px]  flex w-[340px] h-[300px] flex-col justify-start items-center gap-5">
            <p className="flex-grow-0 flex-shrink-0 text-[40px] text-left text-[#00c1a6]">로그인</p>
            <input type="text" placeholder="이메일을 입력해 주세요" value={emailInput} data-key="emailInput" onChange={emailChangeHandler} />
            <input type="password" placeholder="비밀번호" value={passwordInput} data-key="passwordInput" onChange={passwordChangeHandler} onKeyDown={autoLoginHandler} />
            <button className="h-11" onClick={loginBtn}>
              로그인
            </button>
            {/* <p className="flex-grow-0 flex-shrink-0 w-[340px] h-3.5 text-xs text-right text-black">비밀번호 찾기</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
