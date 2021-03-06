import { hostname } from 'os';
import TwConf from 'twconf';

const config = new TwConf({
  nodeEnv: {
    comment: 'Environment type',
    type: {
      name: 'string',
      allowed: ['development', 'test', 'production'],
    },
    default: 'development',
    splitter: val => ({
      nodeEnv: val,
      isDevelopment: val === 'development',
      isTesting: val === 'test',
      isProduction: val === 'production',
    }),
  },
  loggerName: {
    comment: 'Bunyan logger name',
    type: 'string',
    default: `http-server-${hostname()}`,
  },
  loggerLevel: {
    comment: 'Bunyan log level',
    type: {
      name: 'string',
      allowed: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
    },
    default: 'info',
  },
  httpPort: {
    comment: 'Port for HTTP server',
    type: {
      name: 'int',
      min: 0,
      max: 65535,
    },
    default: 3000,
  },
  gracefulStopTimeout: {
    comment: 'A timeout in milliseconds that limits the time for graceful server shutdown',
    type: {
      name: 'int',
      min: 0,
    },
    default: 10000,
  },
});

export default config;
