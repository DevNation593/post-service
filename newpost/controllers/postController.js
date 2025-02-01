const { createPost } = require('../services/postService');

exports.createPost = async (req, res) => {
    try {
        const { content, image } = req.body;
        const post = await createPost(content, image);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};