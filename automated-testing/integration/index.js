require('express-async-errors');

const express = require('express'); // a bare path
const mongoose = require('mongoose');
const morgan = require('morgan');
const error = require('./middlewares/error');
const connect = require('./utilities/connect');
const wilder = require('./models/Wilder');
const wilderRouter = require('./ressources/wilder/wilder.controller');

connect();

const app = express();

app.use(require('cors')());
app.use(morgan('dev'));
app.use('/api/wilders', wilderRouter);
app.use(error);

const PORT = 9000;
const server = app.listen(process.env.PORT || PORT, () =>
  console.log(`Listenning on port ${PORT}`)
);

module.exports = server;
