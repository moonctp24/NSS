import { BACK_API } from "constants/util/API_UTIL";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await BACK_API("GET", "/api/free/medicines", req, res);
  let data = {};
  if (response.responseCode === 200) {
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
