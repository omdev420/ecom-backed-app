const express = require('express');
require('dotenv').config();

const app = express();

const morgan = require('morgan');

const { PORT } = process.env;

app.use(morgan('dev'));

app.use('/', require('./routes'));

app.listen(PORT, () =>
  console.log(`Listening on Port : ${PORT}`)
);
