// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

interface BasicResponse<T> {
  t: number;
  success: boolean;
  result: T;
  msg?: string;
  err_code?: string;
}

interface Data extends BasicResponse<any> {
  result: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  // console.log(req.headers['authorization']);
  res.status(200).json({
    t: new Date().getTime(),
    success: true,
    result: "OK",
  })
}
