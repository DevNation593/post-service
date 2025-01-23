const express = require('express');
const { createPost, getPosts, deletePost } = require('../controllers/postController');

const router = express.Router();

// Route to create a new post
router.post('/', createPost);

// Route to get all posts
router.get('/', getPosts);

// Route to delete a post
router.delete('/:postId', deletePost);

module.exports = router;
