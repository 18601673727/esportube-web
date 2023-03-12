const dev = process.env.NODE_ENV !== 'production';
const domain = process.env.DOMAIN_NAME;
const express = require('express');
const server = express();
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

const apiEndpoint = `http://api.${domain}:8080/v1/query`;
const h5Domain = `http://www.${domain}`;
const gatewayEndpoint = 'http://www.guupay.com/apisubmit';
// const apiEndpoint = `https://esportube.herokuapp.com/v1/query`;
// const h5Domain = `http://localhost:3000`;

const errorHandler = ex => {
  console.error(ex.stack);
  process.exit(1);
}

(async () => {
  let redirectUrl = process.env.REDIRECT_URL;

  console.log(">>> 1: ", redirectUrl)
  const fetch = require('isomorphic-unfetch');
  const params = {
    method: 'POST',
    body: `{"type":"select","args":{"table":{"name":"configs","schema":"public"},"columns":["*"],"where":{"id":{"$eq":"1"}}}}`,
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'cb74937b1e6d11d58e0da6e84d0c304e',
    },
  }
  const response = await fetch(apiEndpoint, params).then(r => r.json())
  console.log(">>> 2: ", response[0].value)
  if (response.length) {
    redirectUrl = response[0].value
  }

  console.log(">>> 3: ",redirectUrl)

  const panicRouter = () => {
    server.all('*', (req, res) => {
      return res.redirect(302, redirectUrl)
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  }

  const normalRouter = () => {
    const customerid = '20080255'
    const apiKey = '416847ac4d15ef67833b77f19a2a5eba59b44e03'
    const paytype = 'wxscan'
    const wechatOnlyMiddleware = (req, res, next) => {
      if (!/MicroMessenger/i.test(req.headers['user-agent']) && !dev) {
        res.status(404).send('Not found');
      }

      next()
    }

    server.use(wechatOnlyMiddleware);

    server.get('/favicon.ico', (req, res) => {
      res.status(200).sendFile('favicon.ico', {
        root: __dirname + '/static/',
      })
    });

    server.get('/payment/make', (req, res) => {
      const md5 = require('md5')
      const queryString = require('query-string')

      const { sdorderno, total_fee } = req.query
      const version = '1.0'
      const notifyurl = `${h5Domain}/payment/async`
      const returnurl = `${h5Domain}/payment/sync`

      const varibles = {
        version,
        customerid,
        sdorderno,
        total_fee,
        notifyurl,
        returnurl,
        paytype,
        sign: md5(`version=${version}&customerid=${customerid}&total_fee=${total_fee}&sdorderno=${sdorderno}&notifyurl=${notifyurl}&returnurl=${returnurl}&${apiKey}`),
      }
      res.redirect(`${gatewayEndpoint}?${queryString.stringify(varibles, { encode: false })}`)
    })

    // TODO
    server.post('/payment/async', (req, res) => {
      console.log(req.body);
      res.json(req.body);
    });

    // http://localhost:3000/payment/sync?status=1&customerid=XXX&sdpayno=m2019070221013786051&sdorderno=1562072496550&total_fee=0.01&paytype=wxscan&remark=&sign=YYY
    server.get('/payment/sync', (req, res) => {
      let actualPage = '/purchaseFail';
      let queryParams = {}

      const md5 = require('md5')
      const { status, sdpayno, sdorderno, total_fee } = req.query
      const sign = md5(`customerid=${customerid}&status=${status}&sdpayno=${sdpayno}&sdorderno=${sdorderno}&total_fee=${total_fee}&paytype=${paytype}&${apiKey}`)

      if (status === '1' && req.query.sign === sign) {
        actualPage = '/purchaseDone'
        queryParams = { sdpayno, sdorderno }
      }

      app.render(req, res, actualPage, queryParams);
    });

    server.get('/watch', (req, res) => {
      const actualPage = '/watch';
      const queryParams = { ...req.query };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/category/:categoryId/page/:page', (req, res) => {
      app.render(req, res, '/', req.params);
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

  if (redirectUrl === '/') {
    app.prepare().then(normalRouter).catch(errorHandler);
  } else {
    app.prepare().then(panicRouter).catch(errorHandler);
  }
})();