const { User, BlogPost, Comment } = require('../models/user');


const commentController = {
  // Get all comments for a blog post
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.findAll({
        where: { blogpost_id: req.params.blogPostId },
        include: [{ model: User, attributes: ['username'] }]
      });

      res.status(200).json(comments);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Create a new comment
  createComment: async (req, res) => {
    try {
      const newComment = await Comment.create({
        content: req.body.content,
        user_id: req.session.user_id,
        blogpost_id: req.params.blogPostId
      });

      res.status(200).json(newComment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a comment by ID
  deleteComment: async (req, res) => {
    try {
      const deletedComment = await Comment.destroy({
        where: {
          id: req.params.commentId,
          user_id: req.session.user_id
        }
      });

      if (!deletedComment) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }

      res.status(200).json(deletedComment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = commentController;
