'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);

// Catchalls
app.use('*',notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port,mongoDB) => {
    if (port) {
      mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
          .then(() => {
              app.listen(port, () => console.log('Server is up on port ', port));
          })
          .catch(error => console.error('Could not start server', error.message));
  }
  else throw new Error('no port provided');
  },
};
