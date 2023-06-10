const router = require('express').Router();
const blogController = require('../controllers/blogController');

// Get all blog posts
router.get('/posts', blogController.getAllBlogPosts);

// Get a single blog post by ID
router.get('/posts/:id', blogController.getBlogPostById);

// Create a new blog post
router.post('/posts', blogController.createBlogPost);

// Update a blog post by ID
router.put('/posts/:id', blogController.updateBlogPost);

// Delete a blog post by ID
router.delete('/posts/:id', blogController.deleteBlogPost);

module.exports = router;
