const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/create-user', userController.createUser);

// Retrieve all users
router.get('/users', userController.getAllUsers);

// Retrieve a specific user by ID
router.get('/users/:id', userController.getUserById);

// Update a user by ID
//todo
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
