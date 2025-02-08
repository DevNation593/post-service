const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { dynamoDB, s3 } = require("../config/awsConfig");
const Post = require("../models/postModel");
const redisClient = require("../config/redisConfig");
AWS.config.update({ region: dynamoDB.region });
const docClient = new AWS.DynamoDB.DocumentClient();
module.exports.createPost = async ({ user, content, imageUrl }) => {
  const id = uuidv4();
  const timestamp = new Date().toISOString();
  const newPost = new Post(id, user, content, imageUrl, timestamp);
  await docClient.put({ TableName: dynamoDB.tableName, Item: newPost }).promise();
  redisClient.setex(id, 3600, JSON.stringify(newPost));
  return newPost;
};