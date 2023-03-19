/* eslint-disable indent */
// require necessary files
const User = require('./user');
const Character = require('./character');

// Create association User has many Character
User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// Create association User has many Character
Character.belongsTo(User, {
  foreignKey: 'user_id',
});

// export the modules user and character
module.exports = { User, Character };
