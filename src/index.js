import start from './server';
import logger from './helpers/logger';

(async () => {
  await start();

  process.on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at:', p, 'reason:', reason);
  });

  process.on('uncaughtException', (err) => {
    logger.error('uncaughtException', err);
    setTimeout(() => {
      process.exit();
    }, 5000);
  });

})();

