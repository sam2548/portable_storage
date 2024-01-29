const express = require('express');
const { urlencoded } = require('express');
const app = express()
app.use(express.json())
app.use(urlencoded({extended: true}))

const mp = require('./routes/routes');
app.use('/', mp);

const hostname = '10.10.10.68';
const port = 9090;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });