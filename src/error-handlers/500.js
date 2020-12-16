'use strict';

module.exports = (err, req, res, next) => {

  console.error(error);
  const errorObject = {
    statusCode: 500,
    message: 'Internal Server Error - ' + (error.message ? error.message : error)
  }
  res.status(500).json(errorObject);

  //let error = { error: err.message || err };
  // res.statusCode = err.status || 500;
  // res.statusMessage = err.statusMessage || 'Server Error';
  // res.setHeader('Content-Type', 'application/json');
  // res.write(JSON.stringify(error));
  // res.end();
};
