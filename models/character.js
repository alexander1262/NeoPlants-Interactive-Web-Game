// require necessary packages
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

// Initialize character model by extending Sequelize's Model class
class Character extends Model { }

// set up fields and rules for Category model
Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    charName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 15],
      },
    },
    charType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    charScore: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

// export the module
module.exports = Character;
