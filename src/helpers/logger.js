import log4js from 'log4js';

log4js.configure({
  appenders: {
    dev: { type: 'stdout' },
    app: { type: 'file', filename: 'app.log' },
  },
  categories: { default: { appenders: ['dev', 'app'], level: 'all' } },
});

export default log4js.getLogger();
