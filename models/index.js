// require user and blog models
const User = require('./User');
const Blog = require('./Blog');

// User has many Blogs while Blogs belongs to User

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog }