import _ from 'lodash';
import validator from 'validator';
import errors from 'http-errors';
import uuid from 'uuid/v4';
import constants from '../../../constants';
import logger from '../../../helpers/logger';
import services from '../../../services';

const subLogicExample = async ({ model, id, str, otherValue }) => {
  if (_.isEmpty(model) || !validator.isUUID(id) || validator.isEmpty(str)) {
    const functionName = 'subLogicExample';
    const errMessage = constants.errors.invalidFunctionParams(functionName);
    logger.error(__filename, functionName, errMessage);
    throw new errors.BadRequest(errMessage);
  }
  const dbData = await model.addOne({ id, str, otherValue });
  const serviceData = await services.googleStorage.upload({
    data: JSON.stringify({ id, str, otherValue }),
    mimetype: 'application/json',
    fileName: `example-${uuid()}.json`,
    isPublic: true,
  });
  return { dbData, serviceData };
};


export default {
  subLogicExample,
};

