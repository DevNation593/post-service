const AWS = require('../config/awsConfig');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { TableName } = require('../models/postModel');

const getPosts = async () => {
    const params = {
        TableName,
    };
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
};

const getPostById = async (postId) => {
    const params = {
        TableName,
        Key: { postId },
    };
    const data = await dynamoDB.get(params).promise();
    return data.Item;
};

module.exports = { getPosts, getPostById };