/* eslint-disable indent */
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Character extends Model {}

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

module.exports = Character;
