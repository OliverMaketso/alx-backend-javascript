const express = require('express');

app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});
  

app.listen((port), () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;