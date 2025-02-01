const { dynamoDB } = require("../config/awsConfig");
const { DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

const TABLE_NAME = "Posts";

const deletePost = async (postId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { postId: { S: postId } },
    };
    const command = new DeleteItemCommand(params);
    await dynamoDB.send(command);
    return { message: "Post eliminado correctamente" };
};

module.exports = { deletePost };
