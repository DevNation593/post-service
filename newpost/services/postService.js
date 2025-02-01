const { dynamoDB } = require("../config/awsConfig");
const { PutItemCommand } = require("@aws-sdk/client-dynamodb");

const TABLE_NAME = "Posts";

const createPost = async (post) => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            postId: { S: post.postId },
            content: { S: post.content },
            createdAt: { S: post.createdAt },
        },
    };
    const command = new PutItemCommand(params);
    await dynamoDB.send(command);
    return post;
};

module.exports = { createPost };