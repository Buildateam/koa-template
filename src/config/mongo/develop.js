const env = process.env;

const mongo = {
  uri: env.MONGO_URL || 'mongodb://localhost:27017/microservice-name-dev',
  poolSize: env.MONGO_POOL_SIZE || 5,
  reconnectTries: env.MONGO_RECONNECT_TRIES || Number.MAX_SAFE_INTEGER,
  reconnectInterval: env.MONGO_RECONNECT_INTERVAL || 1000,
};

export default mongo;
