import { NextApiRequest, NextApiResponse } from "next"
const dev = process.env.NODE_ENV !== 'production';
const h5Domain = dev ? `http://localhost:3000` : process.env.DOMAIN_NAME
const gatewayEndpoint = 'http://www.guupay.com/apisubmit';

const customerid = '20080255';
const apiKey = '416847ac4d15ef67833b77f19a2a5eba59b44e03';
const paytype = 'wxscan';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
    const { sdorderno, total_fee } = request.query;

    // TODO: DTO validation here..

    const md5 = require('md5');
    const queryString = require('query-string');

    const version = '1.0';
    const notifyurl = `${h5Domain}/payment/async`;
    const returnurl = `${h5Domain}/payment/sync`;

    const varibles = {
        version,
        customerid,
        sdorderno,
        total_fee,
        notifyurl,
        returnurl,
        paytype,
        sign: md5(`version=${version}&customerid=${customerid}&total_fee=${total_fee}&sdorderno=${sdorderno}&notifyurl=${notifyurl}&returnurl=${returnurl}&${apiKey}`),
    };

    return Response.redirect(`${gatewayEndpoint}?${queryString.stringify(varibles, { encode: false })}`);
}