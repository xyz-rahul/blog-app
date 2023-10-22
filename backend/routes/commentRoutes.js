const express = require('express');
const router = express.Router();
const path = require('path');
const commentController = require('../controllers/commentController');


// Create a new comment
router.post('/comments', commentController.createComment);

// Retrieve all comments
router.get('/comments', commentController.getAllComments);

// Retrieve a specific comment by ID
router.get('/comments/:id', commentController.getCommentById);

// Update a specific comment by ID
router.put('/comments/:id', commentController.updateComment);

// Delete a specific comment by ID
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
