const AWS = require("aws-sdk");
const { dynamoDB, s3 } = require("../config/awsConfig");
const redisClient = require("../config/redisConfig");
AWS.config.update({ region: dynamoDB.region });
const docClient = new AWS.DynamoDB.DocumentClient();
const s3Client = new AWS.S3();
module.exports.deletePost = async (postId) => {
  // Obtener el post antes de eliminarlo
  const params = {
    TableName: dynamoDB.tableName,
    Key: { id: postId }
  };
  const post = await docClient.get(params).promise();
  
  if (!post.Item) throw new Error("Post not found");
  
  // Eliminar de DynamoDB
  await docClient.delete(params).promise();
  
  // Eliminar de Redis
  redisClient.del(postId);
  
  // Si el post tenía una imagen, eliminarla de S3
  if (post.Item.imageUrl) {
    const s3Params = {
      Bucket: s3.bucketName,
      Key: post.Item.imageUrl.split("/").pop()
    };
    await s3Client.deleteObject(s3Params).promise();
  }
};