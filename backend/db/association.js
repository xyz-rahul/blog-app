const path = require('path');
const User = require(path.join(__dirname,'models','User.js'));
const Blog = require(path.join(__dirname,'models','Blog.js'));
const Comment = require(path.join(__dirname,'models','Comment.js'));


const setUpAssociation = ()=>{
    User.hasMany(Blog);
    User.hasMany(Comment);

    Blog.hasMany(Comment);
    Blog.belongsTo(User);

    Comment.belongsTo(User);
    Comment.belongsTo(Blog);
}

module.exports = setUpAssociation;
