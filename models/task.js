const { DataTypes } = require('sequelize');
const db = require('../models/index');
const user = require('./user');

const Task = db.define(
  'Task',
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id',
      },
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    start_time: {
      type: DataTypes.DATE,
    },
    end_time: {
      type: DataTypes.DATE,
    },
    task_duration: {
      type: DataTypes.STRING,
    },
  },
  { tableName: 'tasks', timestamps: false }
);

Task.belongsTo(user, {
  as: 'user',
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

module.exports = Task;
