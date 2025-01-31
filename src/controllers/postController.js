const { v4: uuidv4 } = require('uuid');

/**
 * Create a new post (text and link only)
 */
exports.createPost = (req, res) => {
    try {
        const { text, link } = req.body;

        if (!text && !link) {
            return res.status(400).json({ message: 'Text or link is required' });
        }

        const newPost = {
            id: uuidv4(),
            text,
            link,
            createdAt: new Date().toISOString()
        };

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Error creating post', error });
    }
};

/**
 * Get all posts
 */
exports.getPosts = (req, res) => {
    res.status(200).json({ message: 'List of posts' });
};

/**
 * Delete a post
 */
exports.deletePost = (req, res) => {
    res.status(200).json({ message: 'Post deleted successfully' });
};
