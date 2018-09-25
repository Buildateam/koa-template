const storage = {
  baseUrl: process.env.STORAGE_ROOT_URL || 'https://storage.googleapis.com/koa-template-example-bucket-dev',
  credentialsFileName: process.env.STORAGE_AUTH_FILENAME || 'google.json',
  // Make sure, that you create bucket manually by https://console.cloud.google.com
  bucketName: 'koa-template-example-bucket-dev',
  projectId: 'gcloud-project-id',
};

export default storage;
