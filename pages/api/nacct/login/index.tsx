import { BACK_API } from "constants/util/API_UTIL";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await BACK_API("/api/login", req, res);
  console.log(`login handler response :: `, response);
  let data = "";
  if (response.responseCode == "200") {
    data = response.data;
  }
  res.status(200).json({
    responseCode: response.responseCode,
    message: response.message,
    data,
  });
};

export default handler;
