/** 개발 환경 구분 코드 */
export const ENV_TYPE = {
  LOCAL: "loc", // 개발자 환경
  DEVELOPMENT: "dev", // 개발환경
  TEST: "tst", // 테스트환경
  PRODUCTION: "prd", // 운영 환경
  REACT_DEVELOPMENT: "development", // 리액트 개발 환경
  REACT_PRODUCTION: "production", // 리액트 운영 환경
};

/** 개발 HOST IP 정보 */
export const ENV_HOST_IP_INFO = {
  // 개발환경
  LOC_HOST_NAME: "3.39.214.33:8081",
  LOC_IP: "3.39.214.33:8081",

  // 개발서버환경
  // DEV_HOST_NAME: "ndevarcheve.com",
  // DEV_IP: "1.1.1.1",

  // // 테스트서버환경
  // TEST_HOST_NAME: "ntestarcheve.com",
  // TEST_IP: "1.1.1.1",

  // // 운영서버환경
  // PRD_HOST_NAME: "archeve.com",
  // PRD_IP: "",
};

// 개발서버정보
export const API_SERVER_INFO = {
  // 개발자 API 서버정보
  LOCAL: "http://3.39.214.33:8081",
  // 개발 API 서버정보
  // DEV: "https://ndevarcheve.com/api",
  // // 테스트 API 서버정보
  // TEST: "https://ntestarcheve.com/api",
  // // 운영 API 서버정보
  // PRODUVTION: "https://archeve.com/api",
};
