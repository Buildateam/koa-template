const errorMessages = {
  modelNotSet: currentValue => `Model must be specified, not - ${currentValue}`,
  invalidDate: (dateFieldName, currentValue) => `Date '${dateFieldName}' invalid- ${currentValue}`,
  invalidFunctionParams: funcName => `Invalid function arguments for function - ${funcName}`,
  writeToStorageFail: fileName => `Some error when saving file - ${fileName} to storage`,
};

export default errorMessages;
