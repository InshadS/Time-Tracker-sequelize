const Sequelize = require('sequelize');
require('dotenv').config();
const db = process.env.DATABASE_URL;

module.exports = new Sequelize(db);
