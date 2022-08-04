const { DataTypes } = require('sequelize');
const db = require('../models/index');

const User = db.define(
  'User',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  },
  { tableName: 'passportUsers', timestamps: false }
);

module.exports = User;
