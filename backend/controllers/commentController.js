const Comment = require('../db/models/Comment');
const commentController = {
    createComment: async (req, res) => {
        try {
            const { content } = req.body;
            const comment = await Comment.create({ content });
            res.status(201).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating a comment' });
        }
    },

    getAllComments: async (req, res) => {
        try {
            const comments = await Comment.findAll();
            res.status(200).json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving comments' });
        }
    },

    getCommentById: async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findByPk(id);
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }
            res.status(200).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving comment' });
        }
    },

    updateComment: async (req, res) => {
        const { id } = req.params;
        const { content } = req.body;
        try {
            const comment = await Comment.findByPk(id);
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }
            comment.content = content;
            await comment.save();
            res.status(200).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating comment' });
        }
    },

    deleteComment: async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findByPk(id);
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }
            await comment.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting comment' });
        }
    },
};

module.exports = commentController;
