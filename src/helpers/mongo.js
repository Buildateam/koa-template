import mongodb from 'mongodb';
import config from '../config';
import logger from '../helpers/logger';


const mongoClient = mongodb.MongoClient;
const mongoConfig = config.mongo;
const mongoUri = mongoConfig.uri;

/**
 * Logger levels: debug, info, error, warn
 */
mongodb.Logger.setLevel('error');

let db = null;

/**
 * Return db connection
 * @returns {Promise.<object>} instance of mongodb client connection to specified db
 */
const getDb = async () => {
  if (db === null) {
    db = await mongoClient.connect(mongoUri, {
      poolSize: mongoConfig.poolSize,
      reconnectTries: mongoConfig.reconnectTries,
      reconnectInterval: mongoConfig.reconnectInterval,
      logger: (...params) => logger.debug(...params),
    });
  }

  return db;
};

const getCollection = async (collectionName) => {
  const database = await getDb();

  if (!database) {
    const errorMsg = `Can't get database instance for collection - ${collectionName}`;
    logger.error(__filename, '[getCollection]', errorMsg);
    throw new Error(errorMsg);
  }
  const collection = database.collection(collectionName);

  if (!collection) {
    const errorMsg = `Can't get collection - ${collectionName}`;
    logger.error(__filename, '[getCollection]', errorMsg);
    throw new Error(errorMsg);
  }

  return collection;
};

export default {
  getCollection,
  ObjectId: mongodb.ObjectID,
};
