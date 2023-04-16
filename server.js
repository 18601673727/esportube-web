const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const domain = process.env.DOMAIN_NAME;
const express = require('express');
const server = express();
const next = require('next');
const handle = app.getRequestHandler();
const h5Domain = dev ? `http://localhost:3000` : domain;
const gatewayEndpoint = 'http://www.guupay.com/apisubmit';
const customerid = '20080255';
const apiKey = '416847ac4d15ef67833b77f19a2a5eba59b44e03';
const paytype = 'wxscan';

const errorHandler = ex => {
  console.error(ex.stack);
  process.exit(1);
}

const wechatOnlyMiddleware = (req, res, next) => {
  if (!/MicroMessenger/i.test(req.headers['user-agent']) && !dev) {
    res.status(404).send('Not found');
  }

  next();
}

(async () => {
  const router = () => {
    // Limitation only serve for wechat h5
    // server.use(wechatOnlyMiddleware);

    server.get('/payment/make', (req, res) => {
      const md5 = require('md5');
      const queryString = require('query-string');

      const { sdorderno, total_fee } = req.query;
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

      res.redirect(`${gatewayEndpoint}?${queryString.stringify(varibles, { encode: false })}`);
    })

    // TODO: Async payment callback handler
    server.post('/payment/async', (req, res) => {
      console.log(req.body);
      res.json(req.body);
    });

    // http://localhost:3000/payment/sync?status=1&customerid=XXX&sdpayno=m2019070221013786051&sdorderno=1562072496550&total_fee=0.01&paytype=wxscan&remark=&sign=YYY
    server.get('/payment/sync', (req, res) => {
      let actualPage = '/purchaseFail';
      let queryParams = {};

      const md5 = require('md5')
      const { status, sdpayno, sdorderno, total_fee } = req.query;
      const sign = md5(`customerid=${customerid}&status=${status}&sdpayno=${sdpayno}&sdorderno=${sdorderno}&total_fee=${total_fee}&paytype=${paytype}&${apiKey}`);

      if (status === '1' && req.query.sign === sign) {
        actualPage = '/purchaseDone';
        queryParams = { sdpayno, sdorderno };
      }

      app.render(req, res, actualPage, queryParams);
    });

    server.get('/watch', (req, res) => {
      const actualPage = '/watch';
      const queryParams = { ...req.query };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/category', (req, res) => {
      const queryParams = { ...req.query };
      app.render(req, res, '/', queryParams);
    });

    server.get('/favicon.ico', (req, res) => {
      res.status(200).sendFile('favicon.ico', {
        root: __dirname + '/public/',
      });
    });

    server.get('/', (req, res) => {
      const queryParams = { ...req.query };
      app.render(req, res, '/', queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  }

  app.prepare().then(router).catch(errorHandler);
})();