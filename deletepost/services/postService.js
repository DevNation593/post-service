const AWS = require('../config/awsConfig');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { TableName } = require('../models/postModel');

const deletePost = async (postId) => {
    const params = {
        TableName,
        Key: { postId },
    };
    await dynamoDB.delete(params).promise();
    return { message: 'Post deleted successfully' };
};

module.exports = { deletePost };