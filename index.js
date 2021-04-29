'use strict';

const server = require('./src/server.js');
const mongoose = require('mongoose');
require('dotenv').config();

let MONGO = process.env.MONGODB_URI;
let PORT = process.env.PORT;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGO, options);

server.start(PORT)