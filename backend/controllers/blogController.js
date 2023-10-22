const Blog = require('../db/models/Blog');
const User = require('../db/models/User');

const blogController = {
    createBlog: async (req, res) => {
        try {
            const { title,description,content , user_id} = req.body;
            const user = await User.findByPk(user_id);
            const blog = await Blog.create({title:title,description:description, content:content });
            await blog.setUser(user);
            res.status(201).json(blog);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating a blog post' });
        }
    },

    getAllBlogs: async (req, res) => {
        try {
            const blogs = await Blog.findAll();
            res.status(200).json(blogs);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving blog posts' });
        }
    },

    getBlogById: async (req, res) => {
        const { id } = req.params;
        try {
            const blog = await Blog.findByPk(id);
            if (!blog) {
                return res.status(404).json({ error: 'Blog post not found' });
            }
            res.status(200).json(blog);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving blog post' });
        }
    },

    updateBlog: async (req, res) => {
        const { id } = req.params;
        const { content } = req.body;
        try {
            const blog = await Blog.findByPk(id);
            if (!blog) {
                return res.status(404).json({ error: 'Blog post not found' });
            }
            blog.content = content;
            await blog.save();
            res.status(200).json(blog);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating blog post' });
        }
    },

    deleteBlog: async (req, res) => {
        const { id } = req.params;
        try {
            const blog = await Blog.findByPk(id);
            if (!blog) {
                return res.status(404).json({ error: 'Blog post not found' });
            }
            await blog.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting blog post' });
        }
    },
};

module.exports = blogController;
