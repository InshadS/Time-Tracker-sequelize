const { DataTypes } = require('sequelize');
const db = require('../models/index');

const Task = db.define('Task', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
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
});

module.exports = Task;
