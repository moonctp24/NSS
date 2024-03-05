import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoginComp = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  // const { code, response, fetchData } = useAxios();
  // const [cookies, setCookie, removeCookie] = useCookies();

  const router = useRouter();

  //   const dispatch = useDispatch();

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  // 각 입력값에 대한 정합성 확인
  //   const validationCheck = () => {
  //     if (!emailInput) {
  //       dispatch(alertAction.openModal({ cont: "이메일이 입력되지 않았습니다" }));
  //       return false;
  //     }
  //     if (!passwordInput) {
  //       dispatch(alertAction.openModal({ cont: "비밀번호가 입력되지 않았습니다" }));
  //       return false;
  //     }
  //     return true;
  //   };

  //   // 비밀번호 입력 영역에서 Enter 키 누르면 자동 로그인 버튼 클릭로직
  //   const autoLoginHandler = (e: React.KeyboardEvent) => {
  //     if (e.key === "Enter") {
  //       loginBtn();
  //     }
  //   };

  //   useEffect(() => {
  //     // console.log(`code :: ${code} / response :: `, response);
  //     postResult();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [code, response, dispatch, router]);

  //   const postResult = useCallback(() => {
  //     // console.log(`code :: ${code} / response :: `, response);
  //     if (response && code == "200") {
  //       dispatch(
  //         loginAction.login({
  //           isLogin: true,
  //           userEmail: response.userEmail,
  //           userNickname: response.userNickname,
  //           userRole: response.userRole,
  //         })
  //       );
  //       router.push("/");
  //     }
  //   }, [code, response, dispatch, router]);

  //   // 로그인 버튼 클릭 -> 로그인 로직 실행
  //   const loginBtn = async () => {
  //     // 정홥성 확인이 완료되면 '로그인'로직 실행
  //     if (validationCheck()) {
  //       let data = {
  //         userEmail: emailInput,
  //         userPassword: passwordInput,
  //       };

  //       fetchData("/api/nauth/acct/login", data, true);
  //     }
  //   };
  return (
    <>
      <h2>login</h2>
      <input type="text" placeholder="이메일을 입력해 주세요" value={emailInput} data-key="emailInput" onChange={emailChangeHandler} />
      {/* <input type="password" placeholder="비밀번호" value={passwordInput} data-key="passwordInput" onChange={passwordChangeHandler} onKeyDown={autoLoginHandler} /> */}
      {/* <button onClick={loginBtn}>로그인</button> */}
    </>
  );
};

export default LoginComp;
