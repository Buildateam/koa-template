import googleStorage from '@google-cloud/storage';
import _ from 'lodash';
import uuid from 'uuid/v4';
import errors from 'http-errors';
import constants from '../../constants';
import config from '../../config';
import logger from '../../helpers/logger';

const { bucketName, projectId } = config.storage;

const keyFilename = `${__dirname}/../../../creds/${config.storage.credentialsFileName}`;

const storage = googleStorage({
  projectId,
  keyFilename,
});

const bucket = storage.bucket(bucketName);

const upload = async ({ data, mimetype, fileName = uuid(), isPublic = false }) => {
  if (_.isEmpty(data) || _.isEmpty(mimetype)) {
    const errMessage = constants.errors.invalidFunctionParams('upload');
    logger.error(__filename, '[errMessage]', errMessage);
    throw new errors.BadRequest(errMessage);
  }

  return new Promise((resolve) => {
    const file = bucket.file(fileName);
    const storageStream = file.createWriteStream({
      metadata: {
        contentType: mimetype,
      },
      public: isPublic,
    });

    storageStream.on('error', (error) => {
      const errMessage = constants.errors.writeToStorageFail(fileName);
      logger.error(__filename, '[upload]', errMessage, error);
      throw new errors.InternalServerError(errMessage);
    });

    storageStream.on('finish', () => {
      const uploadedFileURL = `https://storage.googleapis.com/${bucketName}/${fileName}`;
      return resolve(uploadedFileURL);
    });

    storageStream.end(data);
  });
};

export default {
  upload,
};
