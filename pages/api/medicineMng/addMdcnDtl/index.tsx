import { BACK_API } from "constants/util/API_UTIL";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log("===============12121212 :: ", req.);
  const response = await BACK_API("POST", `/api/free/medicine`, req, res);
  // console.log(`get medicine list handler response :: `, response);
  let data = {};
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
