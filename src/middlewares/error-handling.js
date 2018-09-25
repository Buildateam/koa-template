import errors from 'http-errors';
import logger from '../helpers/logger';

const ErrorHandling = async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404 || ctx.status === 405) {
      throw new errors.NotFound('Invalid route');
    }
  } catch (err) {
    // to client error reporting
    ctx.status = err.status || 500;
    switch (ctx.status) {
      case 500:
        ctx.body = { err };
        logger.error(err);
        break;
      default:
        ctx.body = { err: err.message };
        logger.warn(err.message);
        break;
    }
  }
};

export default ErrorHandling;
