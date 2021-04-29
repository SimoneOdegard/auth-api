'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handling/500.js');
const notFound = require('./error-handling/404.js');
const authRoutes = require('./routes/routes.js');
const logger = require('./middleware/logger.js');

const v1Routes = require('./routes/v1.js');

// Prepare the express app
const app = express();

app.use('/api/v1', v1Routes);

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// Routes
app.use(authRoutes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};