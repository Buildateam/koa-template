import mongo from './mongo';
import slack from './slack';
import storage from './storage';


const env = process.env;
const environment = env.NODE_ENV || 'develop';

const host = env.SERVICE_HOST || 'localhost';
const serviceName = env.SERVICE_NAME || 'koa-template';

const defaultConfig = {
  environment,
  host,
  serviceName,
};

const config = {
  develop: {
    port: env.SERVICE_PORT || 8080,
    mongo: mongo.develop,
    slack: slack.develop,
    storage: storage.develop,
  },
  production: {
    port: env.SERVICE_PORT || 8080,
    mongo: mongo.production,
    slack: slack.production,
    storage: storage.production,
  },
};

export default { ...defaultConfig, ...config[environment] };
