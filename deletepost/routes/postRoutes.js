const express = require('express');
const router = express.Router();
const { removePost } = require('../controllers/postController');

router.delete('/:id', removePost);

module.exports = router;