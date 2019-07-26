import winston from 'winston';

export default (activateFileLogging = true, infoLoggingPath = 'log.log') => {
  const transports = [new winston.transports.Console({
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(info =>
        `${info.timestamp} ${info.level}: ${info.message}`
      )
    )
  })];

  if (activateFileLogging) {
    transports.push(
      new winston.transports.File({
        level: 'info',
        filename: infoLoggingPath,
        handleExceptions: true
      })
    )
  }

  return winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
    transports
  });
}