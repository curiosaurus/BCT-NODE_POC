const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  u_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  uname: Sequelize.STRING,
  uemail: Sequelize.STRING,
  status: {
    type: Sequelize.STRING,
    default: 'I am new!'
  },
  password: Sequelize.STRING
});

module.exports = User;
