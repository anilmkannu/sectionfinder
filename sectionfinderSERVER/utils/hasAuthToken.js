const jwt = require('jsonwebtoken');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
const logger = new Logger();
const requestHandler = new RequestHandler(logger);
module.exports = (req, res, next) => {
  try {
    const bearerToken =
      req.headers['Authorization'] || req.headers['authorization'];
    let token = bearerToken ? bearerToken  : null;
    if (token === null) {
      return requestHandler.genericError(
        res,
        'Unauthorized User, Please login again',
        401
      )();
    }
    const decode = jwt.verify(token, 'Bearer');   
    if (decode === null) {
      return requestHandler.genericError(
        res,
        'Unauthorized User, Please login again',
        401
      )();
    }
   // req.body = req.body || {};
    req.decoded  = decode;
    next();
  } catch (error) {
    return requestHandler.genericError(
      res,
      'Unauthorized User, Please login again',
      401
    )(error, error);
  }
};
