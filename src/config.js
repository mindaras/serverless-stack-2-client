const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-llhid0xvgc12"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.mindaugaslazauskas.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_VJV0BTkTb",
    APP_CLIENT_ID: "73gm85goegh0vfjr18hjbdd516",
    IDENTITY_POOL_ID: "us-east-1:820d4bea-ac1e-4add-951a-b7d6d309540f"
  },
  STRIPE_KEY: "pk_test_KRyQkBV287xuvHfUmyi8lJWY"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-t3r9mhxegs58"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.mindaugaslazauskas.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_O1pOOcOAj",
    APP_CLIENT_ID: "2lvouqe28vlf27p6fvl65fee87",
    IDENTITY_POOL_ID: "us-east-1:08719778-6c03-4dac-935a-e6e4c49e3e75"
  },
  STRIPE_KEY: "pk_test_KRyQkBV287xuvHfUmyi8lJWY"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
