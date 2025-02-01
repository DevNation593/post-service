const AWS = require('../config/awsConfig');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const putItem = async (tableName, item) => {
    await dynamoDB.put({ TableName: tableName, Item: item }).promise();
};

const getItem = async (tableName, key) => {
    const result = await dynamoDB.get({ TableName: tableName, Key: key }).promise();
    return result.Item;
};

const deleteItem = async (tableName, key) => {
    await dynamoDB.delete({ TableName: tableName, Key: key }).promise();
};

module.exports = { putItem, getItem, deleteItem };