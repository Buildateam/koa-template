import errors from 'http-errors';
import _ from 'lodash';
import mongo from '../../helpers/mongo';
import logger from '../../helpers/logger';


class Example {
  constructor(collectionName) {
    if (!collectionName) {
      const errMessage = `collection name for model must be set, not - ${collectionName}`;
      logger.error(errMessage);
      throw new errors.InternalServerError(errMessage);
    }
    this.collectionName = collectionName;
  }

  async init() {
    logger.info(`Init '${this.collectionName}' collection`);
    if (!this.collection) {
      this.collection = await mongo.getCollection(this.collectionName);
      this.collection.createIndex(
        { id: 1 },
        { unique: true, background: true },
      );
      this.collection.createIndex(
        { str: 1 },
        { unique: false, background: true },
      );
    }
    return this;
  }

  async addOne(data) {
    let result = null;
    if (data) {
      const {
        id,
        str,
        otherValue,
      } = data;
      const updatedAt = new Date();
      result = await this.collection.findOneAndUpdate(
        { id },
        { $set: { str, otherValue },
          $setOnInsert: { createdAt: updatedAt },
        },
        { upsert: true, returnOriginal: false },
      );
    }
    return _.get(result, 'value') || null;
  }

  async updateOne({ filter, values }) {
    const updatedAt = new Date();

    const result = await this.collection.findOneAndUpdate(
      { ...filter },
      { $set: { ...values, updatedAt },
        $setOnInsert: { createdAt: updatedAt },
      },
      { upsert: true, returnOriginal: false },
    );
    return _.get(result, 'value') || null;
  }

  async updateMany({ filter, values }) {
    const result = await this.collection.updateMany({ ...filter }, { $set: { ...values } });
    return result;
  }
  async findOne({ filter = {}, projection = {}, limit = 1, page } = {}) {
    let limitValue;
    try {
      limitValue = Number.parseInt(limit, 10);
    } catch (err) {
      logger.warn(`[models.example.findOne] bad limit value - ${limitValue}. Without limit`);
      limitValue = 0;
    }
    if (logger <= -1) {
      limitValue = 0;
    }

    let validPage = 0;
    try {
      validPage = Number.parseInt(page, 10);
    } catch (err) {
      logger.warn(`[models.example.findOne] bad page value - ${page}. First page`);
      validPage = 1;
    }

    let skipValue = 0;
    if (limitValue <= -1) {
      limitValue = 0;
    }
    if (limitValue && validPage > 0) {
      skipValue = (validPage - 1) * limitValue;
    }
    logger.debug('[models.example.findOne] args', { filter, projection, limitValue, skipValue });
    const result = await this.collection
      .find({ ...filter }, { ...projection })
      .limit(limitValue)
      .skip(skipValue)
      .toArray();
    if (Array.isArray(result)) {
      return result[0];
    }
    return result;
  }

  async addMany(items) {
    const result = await Promise.all(items.map(item => this.addOne(item)));
    const notUpdated = (result.filter(r => r === null)).length;
    logger.debug({ updated: result.length - notUpdated, notUpdated });
    return { updated: result.length - notUpdated, notUpdated };
  }

  async findAll({ filter = {}, projection = {}, limit, page } = {}) {
    let limitValue;
    try {
      limitValue = Number.parseInt(limit || 0, 10);
    } catch (err) {
      logger.warn(`[models.example.findAll] bad limit value - ${limitValue}. Without limit`);
      limitValue = 0;
    }
    if (limitValue <= -1) {
      limitValue = 0;
    }

    let validPage = 0;
    try {
      validPage = Number.parseInt(page, 10);
    } catch (err) {
      logger.warn(`[models.example.findAll] bad page value - ${page}. First page`);
      validPage = 1;
    }

    let skipValue = 0;
    if (limitValue <= -1) {
      limitValue = 0;
    }
    if (limitValue && validPage > 0) {
      skipValue = (validPage - 1) * limitValue;
    }
    logger.debug('[models.example.findAll] args', { filter, projection, limitValue, skipValue });
    const result = await this.collection
      .find({ ...filter }, { ...projection })
      .limit(limitValue)
      .skip(skipValue)
      .toArray();
    return result;
  }

  async count({ filter = {} } = {}) {
    const total = await this.collection.count(filter);
    return total;
  }
}

export default Example;
