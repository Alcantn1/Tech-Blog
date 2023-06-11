const { User, BlogPost } = require('../models/user');
// const blogController = require('../controllers/blogController');

const blogController = {
  // Get all blog posts
  getAllBlogPosts: async (req, res) => {
    try {
      const blogPosts = await BlogPost.findAll({
        include: [{ model: User, attributes: ['username'] }]
      });

      res.render('home', { blogPosts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Get a single blog post by ID
  getBlogPostById: async (req, res) => {
    try {
      const blogPost = await BlogPost.findByPk(req.params.id, {
        include: [{ model: User, attributes: ['username'] }]
      });

      if (!blogPost) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }

      res.render('blogPost', { blogPost });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Create a new blog post
  createBlogPost: async (req, res) => {
    try {
      const newBlogPost = await BlogPost.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
      });

      res.status(200).json(newBlogPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update a blog post by ID
  updateBlogPost: async (req, res) => {
    try {
      const updatedBlogPost = await BlogPost.update(
        {
          title: req.body.title,
          content: req.body.content
        },
        {
          where: { id: req.params.id }
        }
      );

      if (!updatedBlogPost[0]) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }

      res.status(200).json(updatedBlogPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a blog post by ID
  deleteBlogPost: async (req, res) => {
    try {
      const deletedBlogPost = await BlogPost.destroy({
        where: { id: req.params.id }
      });

      if (!deletedBlogPost) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }

      res.status(200).json(deletedBlogPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = blogController;
