import Router from 'koa-router';
import subRouter from './subRouter';

const router = new Router();

router
  .use('/example-me', subRouter.routes(), subRouter.allowedMethods())
;

export default router;
