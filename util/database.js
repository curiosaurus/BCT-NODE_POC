const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeJS', 'admin', '1234', {
  host: 'localhost',
  dialect: 'mssql',
  port:"1433"
});

module.exports = sequelize;
