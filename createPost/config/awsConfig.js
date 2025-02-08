require("dotenv").config();

module.exports = {
  dynamoDB: {
    region: process.env.AWS_REGION,
    tableName: process.env.DYNAMODB_TABLE
  },
  s3: {
    bucketName: process.env.S3_BUCKET
  }
};
