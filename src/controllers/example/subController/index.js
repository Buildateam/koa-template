import errors from 'http-errors';
import logic from '../../../logic/example/subLogic';


/**
 * @api {post} /example/example-me/sub-example/:id?str=:str- Return same example information
 * @apiDescription  Description about returning same example information
 * @apiName exampleEndpoint
 * @apiParam {String} id - Example id parameter
 * @apiParam {String} [str='default'] - Example str parameter
 * @apiParam {Object} [otherValue] - Example otherValue parameter
 * @apiGroup Examples
 *
 *
 * @apiExample {curl} Example usage:
 *     curl -X POST http://localhost:8080//xample/example-me/sub-example/b8ced546-3a37-4729-b3a0-8bf7e8304fb0?str=str
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "id" : "5ae0595f777ef6e6b97f995e",
 *     "str" : "default"
 * }
 */
const subControllerExample = async (ctx, next) => {
  const { id } = ctx.params;
  const { str } = ctx.request.query;
  const { otherValue } = ctx.request.body;
  const { exampleModel } = ctx;
  const result = await logic.subLogicExample({
    model: exampleModel,
    id,
    str,
    otherValue,
  });
  if (!result) {
    throw new errors.NotFound('Next image not found');
  }
  ctx.body = result;
  await next();
};

export default {
  subControllerExample,
};
