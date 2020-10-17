const winston = require('winston')
require('winston-daily-rotate-file')

const logger = winston.createLogger({
  level: 'notice',
  // format: winston.format.json(),
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} | ${level} | ${message}`)
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.DailyRotateFile({
      level: process.env.LOGGER_LEVEL,
      filename: './logs/application-error-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '30m',
      maxFiles: '15d'
    }),
    new winston.transports.DailyRotateFile({
      filename: './logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH-mm',
      zippedArchive: true,
      maxSize: '30m',
      maxFiles: '15d'
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger