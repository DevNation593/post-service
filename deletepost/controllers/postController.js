const { deletePost } = require('../services/postService');

exports.removePost = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deletePost(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};