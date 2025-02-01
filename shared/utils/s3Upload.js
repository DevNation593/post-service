const s3 = new AWS.S3();

const uploadToS3 = async (fileBuffer, fileName) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
        Body: fileBuffer,
        ContentType: 'image/jpeg',
    };
    const uploadResult = await s3.upload(params).promise();
    return uploadResult.Location;
};

module.exports = { uploadToS3 };