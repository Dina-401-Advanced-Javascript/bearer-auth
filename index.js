'use strict';

require('dotenv').config();

const server = require('./src/server');

// Start the web server
server.start(process.env.PORT,process.env.MONGOOSE_URI);
