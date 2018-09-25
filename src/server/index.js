import Koa from 'koa';
import KoaStatic from 'koa-static';
import KoaCors from 'kcors';
import Http from 'http';
import KoaLogger from 'koa-logger';
import KoaBodyParser from 'koa-bodyparser';
import router from '../routes';
import config from '../config';
import logger from '../helpers/logger';
import initModels from '../helpers/initModels';
import modelsDescription from './helpers/modelsDescription';
import ErrorHandling from '../middlewares/error-handling';

const startHttpServer = koaApp => new Promise((resolve, reject) => {
  Http.createServer(koaApp.callback()).listen(config.port, (err) => {
    if (err) {
      logger.error(`Service ${config.serviceName} not started`);

      return reject(err);
    }

    logger.info(`Service ${config.serviceName} started on *:${config.port}`);

    return resolve(koaApp);
  });
});

const start = async () => {
  // Create koa app
  const app = new Koa();
  // Init all models
  await initModels({
    context: app.context,
    modelsDescription,
  });
  // Serve static content
  const staticPath = [process.cwd(), '/static/app'].join('');
  // Use middlewares
  app
    .use(KoaCors({ origin: '*' }))
    .use(ErrorHandling)
    .use(KoaLogger())
    .use(KoaBodyParser())
    .use(router.routes())
    .use(KoaStatic(staticPath));

  await startHttpServer(app);
};

export default start;
