# posts-test
 
# Post Upload Application

This is a Node.js-based backend application for uploading posts, designed to handle text metadata and images separately using AWS services. The metadata of each post is stored in an Amazon DynamoDB table, while images are uploaded to an Amazon S3 bucket.

# Features

## Post Creation: Allows users to create posts with text content and an optional image.

## Metadata Storage: Stores post details such as title, description, timestamp, and tags in DynamoDB.

## Image Upload: Uploads images to Amazon S3 for scalable storage.

## Scalability & High Availability: Utilizes AWS cloud services to ensure seamless performance.

# Architecture

User submits a post (text + optional image).

The backend processes the request:

Stores metadata in DynamoDB.

Uploads the image to S3 (if provided).

A response is returned, confirming the post has been saved successfully.

# Technologies Used

## Node.js

## Express.js (for API handling)

## AWS SDK (for interacting with DynamoDB and S3)

## Amazon DynamoDB (NoSQL database for metadata storage)

## Amazon S3 (for storing post images)