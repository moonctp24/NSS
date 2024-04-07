import axios from "axios";
import { COOKIES } from "constants/CONST";

/**
 * 회원 상태 코드 한글변환
 * @param {string} code
 * @returns
 */
export function codeToKor(code) {
  if (code === "ACTIVE") {
    return "일반";
  } else if (code === "ADMIN") {
    return "관리자";
  } else if (code === "INACTIVE") {
    return "비활성화";
  } else if (code === "REMOVED") {
    return "탈퇴";
  } else if (code === "BANNED") {
    return "정지";
  } else {
    return "잘못된 형식";
  }
}

/**
 * 콘솔로그
 * @param {Object} d
 * @param {Number} t 0=log / 1=error / 2=info / 3=debug
 * @param {String} prev call where
 */
export function logger(d, t = 0, prev = "none") {
  switch (t) {
    case 0:
      console.log(`D :: ${dateFormat()} ::`, prev, " :: ", d);
      break;
    case 1:
      console.error(`E :: ${dateFormat()} ::`, prev, " :: ", d);
      break;
    case 2:
      console.info(`I :: ${dateFormat()} ::`, prev, " :: ", d);
      break;
    case 3:
      console.debug(`D :: ${dateFormat()} ::`, prev, " :: ", d);
      break;
  }
}

/**
 * 날짜 포메터
 * @param {Date} date new Date()
 * @param {String} format yyyy-mm-dd hh:mi:ss
 */
export function dateFormat(date = new Date(), format = "yyyy-mm-dd hh:mi:ss") {
  const eng = /[a-zA-Z]/;
  if (typeof date == "string") {
    format = format.replace(/\|hh24/gi, " hh");
    for (var i = 0; i < date.length; i++) {
      format = format.replace(eng, date[i]);
    }
    /*date 문자열과 format 길이가 맞지 않는 경우*/
    if (format.search(eng) != -1) format = format.substring(0, format.search(eng) - 1);
    return format;
  }
  const yy = date.getFullYear();
  const mm = lPad(date.getMonth() + 1);
  const dd = lPad(date.getDate());
  const hh = lPad(date.getHours());
  const mi = lPad(date.getMinutes());
  const ss = lPad(date.getSeconds());
  return format.replace("yyyy", yy).replace("mm", mm).replace("dd", dd).replace("hh", hh).replace("mi", mi).replace("ss", ss);
}

/**
 * 아이템 가격 포멧
 * @param {String} money
 * @returns
 */
export function moneyFormat(money) {
  let moneyLen = money.length;
  if (moneyLen % 2 === 1) {
    if (money.length <= 1) {
      return money.slice(moneyLen - 1, moneyLen) + "동";
    } else if (money.length <= 3) {
      return money.slice(moneyLen - 3, moneyLen - 2) + "은 " + money.slice(moneyLen - 2, moneyLen) + "동";
    } else {
      return money.slice(0, moneyLen - 4) + "골 " + money.slice(moneyLen - 4, moneyLen - 2) + "은 " + money.slice(moneyLen - 2, moneyLen) + "동";
    }
  } else {
    if (money.length <= 2) {
      return money.slice(moneyLen - 2, moneyLen) + "동";
    } else if (money.length <= 4) {
      return money.slice(moneyLen - 4, moneyLen - 2) + "은 " + money.slice(moneyLen - 2, moneyLen) + "동";
    } else {
      return money.slice(0, moneyLen - 4) + "골 " + money.slice(moneyLen - 4, moneyLen - 2) + "은 " + money.slice(moneyLen - 2, moneyLen) + "동";
    }
  }
  // return format.replace("yyyy", yy).replace("mm", mm).replace("dd", dd).replace("hh", hh).replace("mi", mi).replace("ss", ss);
}

/**
 * back(Java)에서 불러온 문자열을 Html형식의 줄바꿈으로 변경
 * @param {String} java
 * @returns {String}
 */
export function javaToHtml(java) {
  return java?.replace(/(?:\r\n|\r|\n|\\n)/g, "</li><li className='mg_t_12'>");
}

/**
 * 자리수 맞춰 0 넣어줌
 * @param {Number} n number (ex: 13)
 * @param {Number} l length (ex: 4)
 * @returns {String} str (ex: 0013)
 */
export function lPad(n, l = 2) {
  let str = "" + n;
  while (str.length < l) {
    str = "0" + str;
  }
  return str;
}

/**
 * 토큰 쿠키에 저장
 * @param {String} id
 * @param {String} accessToken
 * @param {String} refreshToken
 * @param {String} expireDate
 */
// export function setJwtToken(id, accessToken, refreshToken, expireDate) {
//   logger({ id, accessToken, refreshToken, expireDate }, 0, "setToken");
//   axios.defaults.headers.Authorization = "Bearer " + accessToken;
//   cookie.save(COOKIES.IS_LOGIN, true, { path: "/" });
//   cookie.save(COOKIES.ID, id, { path: "/" });
//   cookie.save(COOKIES.ACCESS_TOKEN, accessToken, { path: "/" });
//   cookie.save(COOKIES.REFRESH_TOKEN, refreshToken, { path: "/" });
//   cookie.save(COOKIES.EXPIRE_DATE, expireDate, { path: "/" });
// }

/**
 * 토큰 삭제
 */
// export function removeToken() {
//   logger("removeToken()");
//   delete axios.defaults.headers.Authorization;
//   cookie.remove(COOKIES.IS_LOGIN, { path: "/" });
//   cookie.remove(COOKIES.ID, { path: "/" });
//   cookie.remove(COOKIES.ACCESS_TOKEN, { path: "/" });
//   cookie.remove(COOKIES.REFRESH_TOKEN, { path: "/" });
//   cookie.remove(COOKIES.EXPIRE_DATE, { path: "/" });
// }

/**
 * 토큰 분리
 */
// export const cookieStringToObject = (cookieString) => {
//   if (!cookieString) {
//     return "";
//   } else {
//     let result = [];
//     for (var j = 0; j < cookieString.length; j++) {
//       let tmp = [];
//       const cookieObj = cookieString[j].split("; ");

//       for (var i = 0; i < cookieObj.length; i++) {
//         var cur = cookieObj[i].split("=");
//         tmp[cur[0]] = cur[1];
//       }
//       result[j] = tmp;
//     }
//     return result;
//   }
// };
