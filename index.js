const express = require('express');
const app = express();
const port = 3000;

app.get('/btc/prices', (req, res) => {
  console.log(req.header)

  res.json(data);
});

app.listen(port, () => console.log(`Example app listening on port 3000!`)); 
