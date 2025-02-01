const AWS = require('../config/awsConfig');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { uploadToS3 } = require('../../shared/utils/s3Upload');
const { TableName } = require('../models/postModel');

const createPost = async (content, image) => {
    const postId = Date.now().toString();
    const timestamp = new Date().toISOString();
    let imageUrl = null;
    if (image) {
        imageUrl = await uploadToS3(image, `posts/${postId}.jpg`);
    }
    const post = {
        postId,
        content,
        imageUrl,
        createdAt: timestamp,
    };
    await dynamoDB.put({ TableName, Item: post }).promise();
    return post;
};
module.exports = { createPost };