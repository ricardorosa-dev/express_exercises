const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

function tokenValidator(req, res, next) {
  const token = req.headers.authorization;
  const validator = /^[a-zA-Z0-9_.-]*$/i;

  if (token.length !== 12 || !validator.test(String(token).toLowerCase())) {
    return res.status(401).send("Invalid token");
  }

  next();
}

app.use(tokenValidator);

async function api() {
  const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  const data = await response.json().then((response) => response.bpi);

  return data;
}

app.get('/btc/prices', async (req, res) => {
  const result = await api();

  res.json(result);
});

app.listen(port, () => console.log(`Example app listening on port 3000!`));
