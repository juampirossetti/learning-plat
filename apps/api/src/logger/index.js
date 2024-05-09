import winston, { format, transports } from 'winston';
import config from '../config';
import { isProduction } from '../helpers';

const formatters = [
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.simple(),
  format.printf(
    ({ timestamp, level, message }) =>
      `[${timestamp}] [${level.toUpperCase()}] ${message}`
  ),
];

const createConsoleTransport = () =>
  new transports.Console({ silent: isProduction() });

const createFileTransport = (filename = null, level = config.LOGS.LEVEL) =>
  new transports.File({
    filename: `dupai${filename ? `-${filename}.log` : '.log'}`,
    level,
    dirname: config.LOGS.DIRECTORY,
    maxFiles: config.LOGS.FILES,
    maxsize: config.LOGS.FILE_SIZE,
  });

const logger = winston.createLogger({
  format: format.combine(...formatters),
  transports: [
    createConsoleTransport(),
    createFileTransport(),
    createFileTransport('errors', 'error'),
  ],
  exceptionHandlers: [
    createConsoleTransport(),
    createFileTransport('exceptions'),
  ],
  rejectionHandlers: [
    createConsoleTransport(),
    createFileTransport('rejections'),
  ],
  exitOnError: false,
});

export default logger;
