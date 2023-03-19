// require necessary packages and files
const { sequelize } = require('../config/connection');
const { User, Character } = require('../models');

const userData = require('./userData.json');
const charData = require('./charData.json');

// create a function to seed the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // create and insert multiple instances for user
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  // create and insert multiple instances for character
  for (const character of charData) {
    await Character.create({
      ...character,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

// call seedDatabase function
seedDatabase();
