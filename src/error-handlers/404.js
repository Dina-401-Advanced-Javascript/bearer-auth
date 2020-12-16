'use strict';

module.exports = (error,req,res,next) => {

  console.error(error);
  const errorObject = {
      statusCode: 404,
      message: 'Resource Not Found - ' + (error.message ? error.message : error)
  }
  res.status(404).json(errorObject);

  // let error = { error: 'Resource Not Found' };
  // res.statusCode = 404;
  // res.statusMessage = 'Not Found';
  // res.setHeader('Content-Type', 'application/json');
  // res.write(JSON.stringify(error));
  // res.end();
};