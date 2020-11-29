const express = require('express');
const bodyParser = require('body-parser')
const summoner = require('./routes/summoner')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', summoner);

app.listen(4001, () => {
  console.log("git test");
});
