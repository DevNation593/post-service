const { getPosts, getPostById } = require('../services/postService');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await getPostById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};