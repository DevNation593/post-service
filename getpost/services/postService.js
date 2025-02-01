const { dynamoDB } = require("../config/awsConfig");
const { GetItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");

const TABLE_NAME = "Posts";

const getPostById = async (postId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { postId: { S: postId } },
    };
    const command = new GetItemCommand(params);
    const response = await dynamoDB.send(command);
    return response.Item ? response.Item : null;
};

const getAllPosts = async () => {
    const command = new ScanCommand({ TableName: TABLE_NAME });
    const response = await dynamoDB.send(command);
    return response.Items;
};

module.exports = { getPostById, getAllPosts };