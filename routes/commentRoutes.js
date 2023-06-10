const router = require('express').Router();
const commentController = require('../controllers/commentController');

// Get all comments for a blog post
router.get('/posts/:blogPostId/comments', commentController.getAllComments);

// Create a new comment
router.post('/posts/:blogPostId/comments', commentController.createComment);

// Delete a comment by ID
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
