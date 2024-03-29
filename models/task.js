const { DataTypes } = require('sequelize');
const db = require('../models/index');
const passportUsers = require('./passportuser');

const Task = db.define(
  'Task',
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: passportUsers,
        key: 'id',
      },
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    task: {
      type: DataTypes.STRING,
    },
    start_time: {
      type: DataTypes.STRING,
    },
    end_time: {
      type: DataTypes.STRING,
    },
    task_duration: {
      type: DataTypes.STRING,
    },
  },
  { tableName: 'tasks', timestamps: false }
);

Task.belongsTo(passportUsers, {
  as: 'passportUsers',
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

module.exports = Task;
