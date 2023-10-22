const User = require('../db/models/User');
const userController = {
    createUser: async (req, res, next) => {
        const { name, username, password, email } = req.body;
        // Check if any required field is missing
        if (!name || !username || !password || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        try {
            const user = await User.create({
                name: name,
                username: username,
                password: password,
                email: email
            });
            res
                .status(200)
                .json(user);
        } catch (error) {
            res
                .status(500)
                .json({ error: 'Error retrieving users' });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error retrieving users' });
        }
    },
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res
                    .status(404)
                    .json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(err);
            res.status(500).json({ error: 'Error retrieving user' });
        }
    },
    //todo
    // Update a user by ID
    updateUser: async (req, res) => {
        const { id } = req.params;
        const updatedFields = req.body;

        try {
            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update only the fields that are available in the request body
            const updatedUser = await user.update(updatedFields);

            res.status(200).json(updatedUser);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error updating user' });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            await user.destroy();
            res.status(204).json({ message: 'User deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error deleting user' });
        }
    },

}

module.exports = userController;