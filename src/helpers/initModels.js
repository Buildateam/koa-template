import _ from 'lodash';

const initModels = async ({ context, modelsDescription }) => {
  if (_.isObject(context) && _.isObject(modelsDescription)) {
    const collectionsNames = Object.keys(modelsDescription);
    await Promise.all(collectionsNames.map(async (collectionName) => {
      const Model = modelsDescription[collectionName];
      const model = new Model(collectionName);
      if (model && _.isFunction(model.init)) {
        await model.init();
        Object.defineProperty(context, collectionName, {
          get() {
            return model;
          },
        });
      }
    }));
  }
};

export default initModels;
