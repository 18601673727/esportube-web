import { NextApiRequest, NextApiResponse } from "next"

const customerid = '20080255';
const apiKey = '416847ac4d15ef67833b77f19a2a5eba59b44e03';
const paytype = 'wxscan';

// GET /payment/sync?status=1&customerid=XXX&sdpayno=m2019070221013786051&sdorderno=1562072496550&total_fee=0.01&paytype=wxscan&remark=&sign=YYY
export async function GET(request: NextApiRequest, response: NextApiResponse) {
    const { status, sdpayno, sdorderno, total_fee, sign } = request.body;

    // TODO: DTO validation here..

    const md5 = require('md5')
    const localSign = md5(`customerid=${customerid}&status=${status}&sdpayno=${sdpayno}&sdorderno=${sdorderno}&total_fee=${total_fee}&paytype=${paytype}&${apiKey}`);

    if (status === '1' && localSign === sign) {
        return Response.redirect(`/purchaseDone?sdpayno=${sdpayno}&sdorderno=${sdorderno}`)
    }

    return new Response(JSON.stringify({ message: "something excepted happened!" }))
}