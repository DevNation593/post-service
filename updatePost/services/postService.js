const AWS = require("aws-sdk");
const { dynamoDB } = require("../config/awsConfig");
const redisClient = require("../config/redisConfig");
AWS.config.update({ region: dynamoDB.region });
const docClient = new AWS.DynamoDB.DocumentClient();
module.exports.updatePost = async (postId, updatedData) => {
  const params = {
    TableName: dynamoDB.tableName,
    Key: { id: postId },
    UpdateExpression: "set content = :content, imageUrl = :imageUrl",
    ExpressionAttributeValues: {
      ":content": updatedData.content || null,
      ":imageUrl": updatedData.imageUrl || null
    },
    ReturnValues: "ALL_NEW"
  };

  const result = await docClient.update(params).promise();
  redisClient.setex(postId, 3600, JSON.stringify(result.Attributes));
  return result.Attributes;
};