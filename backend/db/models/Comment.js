const {DataTypes} = require('sequelize');
const sequelize = require('../dbConfig'); // Adjust the path as needed

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    content:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    timestamps: true
});

module.exports = Comment;