const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


// Create a new blog post
router.post('/blogs', blogController.createBlog);

// Retrieve all blog posts
router.get('/blogs', blogController.getAllBlogs);

// Retrieve a specific blog post by ID
router.get('/blogs/:id', blogController.getBlogById);

// Update a specific blog post by ID
router.put('/blogs/:id', blogController.updateBlog);

// Delete a specific blog post by ID
router.delete('/blogs/:id', blogController.deleteBlog);

// Add more routes as needed

module.exports = router;
