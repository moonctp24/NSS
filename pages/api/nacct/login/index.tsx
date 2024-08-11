import { BACK_API } from "constants/util/API_UTIL";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await BACK_API("POST", "/api/login", req, res);
  // console.log(`login handler response :: `, response);
  let data = {};
  // console.log("222222222" + res.statusCode);
  if (res.statusCode === 200) {
    data = response.data;
  } else {
    console.log("error code check" + response.responseCode);
  }
  res.status(200).json({
    responseCode: response.responseCode,
    message: response.message,
    data,
  });
};

export default handler;
