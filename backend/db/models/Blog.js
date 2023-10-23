const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig'); // Adjust the path as needed
const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    timestamps: true
});

module.exports = Blog;
