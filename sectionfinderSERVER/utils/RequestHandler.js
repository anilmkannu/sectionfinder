const _ = require('lodash');

class RequestHandler {
  constructor(logger) {
    this.logger = logger;
  }

  throwIf(fn, status, errorType, errorMessage) {
    return result =>
      fn(result) ? this.throwError(status, errorType, errorMessage)() : result;
  }

  validateJoi(err, status, errorType, errorMessage) {
    if (err) {
      this.logger.log(`error in validating request : ${errorMessage}`, 'warn');
    }
    return !_.isNull(err)
      ? this.throwError(status, errorType, errorMessage)()
      : '';
  }

  throwError(status, errorType, errorMessage) {
    return e => {
      if (!e) e = new Error(errorMessage || 'Default Error');
      e.status = status;
      e.errorType = errorType;
      throw e;
    };
  }

  catchError(res, error) {
    if (!error) error = new Error('Default error');
    res.status(error.status || 500).json({
      type: 'error',
      message: error.message || 'Unhandled error',
      error
    });
  }

  sendSuccess(res, message, status, type, data) {
    this.logger.log(
      `a request has been made and proccessed successfully at: ${new Date()}`,
      'info'
    );
    return globalData => {
      if (_.isUndefined(status)) {
        status = 200;
      }
      if (_.isUndefined(type)) {
        type = 'success';
      }
      if (_.isUndefined(data)) {
        data = null;
      }
      res.status(status).json({
        type: type,
        message: message || 'Success result',
        data : data,
        ...globalData
      });
    };
  }

  genericError(res, message, status, isNotReturn) {
    this.logger.log(
      `a request has been made and proccessed unSuccessfully at: ${new Date()}`,
      'warn'
    );
    if (!isNotReturn) {
      return (data, globalData) => {
        if (_.isUndefined(status)) {
          status = 500;
        }
        res.status(status).json({
          type: 'error',
          message: message || 'Error result',
          data,
          ...globalData
        });
      };
    }
  }

  sendError(req, res, error,status) {
    this.logger.log(
      `error ,Error during processing request: ${`${req.protocol}://${req.get(
        'host'
      )}${req.originalUrl}`} details message: ${error.message}`,
      'error'
    );
    return res.status(status || 500).json({
      type: 'error',
      message: error.message || error.message || 'Unhandled Error',
      error
    });
  }
}
module.exports = RequestHandler;
