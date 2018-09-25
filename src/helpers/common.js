import _ from 'lodash'

export const isNotEmptyArray = arr => !_.isEmpty(arr) && _.isArray(arr);
export const isNotEmptyObject = obj => !_.isEmpty(obj) && _.isObject(obj);
export const isNotEmptyString = str => !_.isEmpty(str) && _.isString(str);
