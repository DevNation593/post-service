const AWS = require("aws-sdk");
const { dynamoDB } = require("../config/awsConfig");
const redisClient = require("../config/redisConfig");
AWS.config.update({ region: dynamoDB.region });
const docClient = new AWS.DynamoDB.DocumentClient();
module.exports.getPost = async (postId) => {
  return new Promise((resolve, reject) => {
    redisClient.get(postId, async (err, cachedPost) => {
      if (cachedPost) {
        return resolve(JSON.parse(cachedPost));
      }
      
      try {
        const params = {
          TableName: dynamoDB.tableName,
          Key: { id: postId }
        };
        const post = await docClient.get(params).promise();
        if (!post.Item) throw new Error("Post not found");
        redisClient.setex(postId, 3600, JSON.stringify(post.Item));
        resolve(post.Item);
      } catch (error) {
        reject(error);
      }
    });
  });
};