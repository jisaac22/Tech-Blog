const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blodData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
   });

   for (const blog of blogData) {
     await Blog.bulkCreate({
        ...blog,
       user_id: users[Math.floor(Math.random() * users.length)].id
    });  
  }

  process.exit(0);
};

seedDatabase();