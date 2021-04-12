const appRoot = require('app-root-path');
const winston = require('winston');

const levels = {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    HTTP: 3,
    DEBUG: 4,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
};

const colors = {
    ERROR: 'red',
    WARN: 'yellow',
    INFO: 'green',
    HTTP: 'magenta',
    DEBUG: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level} : ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: `${appRoot}/logs/error.log`,
        level: 'error',
    }),
    new winston.transports.File({ filename: `${appRoot}/logs/all.log` }),
];

const loggerConfig = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
    exitOnError: false, // do not exit on handled exceptions
});

export default loggerConfig;
