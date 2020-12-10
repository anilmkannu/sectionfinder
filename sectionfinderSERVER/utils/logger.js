const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const util = require('util');
const DailyRotate = require('winston-daily-rotate-file');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

let infoLogger;
let errorLogger;
let warnLogger;
let allLogger;

class Logger {
  constructor() {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    infoLogger = createLogger({
      // change level if in dev environment versus production
      level: env === 'development' ? 'info' : 'debug',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
        // this is to log in json format
        // format.json()
      ),
      transports: [
        new transports.Console({
          levels: 'info',
          format: format.combine(
            format.colorize(),
            format.printf(
              info => `${info.timestamp} ${info.level}: ${info.message}`
            )
          )
        }),

        new DailyRotate({
          filename: `${logDir}/%DATE%-info-results.log`,
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '2d'
        })
      ],
      exitOnError: false
    });

    errorLogger = createLogger({
      // change level if in dev environment versus production
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(
          error => `${error.timestamp} ${error.level}: ${error.message}`
        )
      ),
      transports: [
        new transports.Console({
          levels: 'error',
          format: format.combine(
            format.colorize(),
            format.printf(
              error => `${error.timestamp} ${error.level}: ${error.message}`
            )
          )
        }),

        new DailyRotate({
          filename: `${logDir}/%DATE%-errors-results.log`,
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '2d'
        })
      ],
      exitOnError: false
    });

    warnLogger = createLogger({
      // change level if in dev environment versus production
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(
          warn => `${warn.timestamp} ${warn.level}: ${warn.message}`
        )
      ),
      transports: [
        new transports.Console({
          levels: 'warn',
          format: format.combine(
            format.colorize(),
            format.printf(
              warn => `${warn.timestamp} ${warn.level}: ${warn.message}`
            )
          )
        }),

        new DailyRotate({
          filename: `${logDir}/%DATE%-warnings-results.log`,
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '2d'
        })
      ],
      exitOnError: false
    });

    allLogger = createLogger({
      // change level if in dev environment versus production
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(
          silly => `${silly.timestamp} ${silly.level}: ${silly.message}`
        )
      ),
      transports: [
        new DailyRotate({
          filename: `${logDir}/%DATE%-results.log`,
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '2d'
        })
      ],
      exitOnError: false
    });
  }

  log(message, severity, data) {
    if (data) {
      message += ` ${util.inspect(data, false, null, true)}`;
    }
    if (severity == null || infoLogger.levels[severity] == null) {
      this.severity = 'info';
    }
    if (severity === 'info') {
      infoLogger.log(severity, message);
      allLogger.log(severity, message);
    } else if (severity === 'error') {
      errorLogger.log(severity, message);
      allLogger.log(severity, message);
    } else if (severity === 'warn') {
      warnLogger.log(severity, message);
      allLogger.log(severity, message);
    }
  }
}

module.exports = Logger;
