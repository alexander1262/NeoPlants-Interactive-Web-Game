/* eslint-disable indent */
const User = require('./user');
const Character = require('./character');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Character };
