const dev = process.env.NODE_ENV !== 'production';
const express = require('express');
const server = express();
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

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
  const response = await fetch('https://esportube.herokuapp.com/v1/query', params).then(r => r.json())
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
    server.get('/list', (req, res) => {
      const actualPage = '/';
      const queryParams = { ...req.query };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/watch/:id', (req, res) => {
      const actualPage = '/watch';
      const queryParams = { videoId: req.params.id };
      app.render(req, res, actualPage, queryParams);
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