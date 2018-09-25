import Router from 'koa-router';
import exampleController from '../../../controllers/example';

const router = new Router();

router
  .post('/sub-example/:id', exampleController.subController.subControllerExample)
;

export default router;
