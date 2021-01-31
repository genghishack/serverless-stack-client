const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "sls-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://fqjgbuhwgb.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_3ZaJqRrgN",
    APP_CLIENT_ID: "uclc69t2rqa9k1s2ftho8d16e",
    IDENTITY_POOL_ID: "us-west-2:416e2a4f-e1dd-4c7a-bbe5-60b4ae19945a",
  },
};

export default config;
