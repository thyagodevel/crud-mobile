const connection = require('../config/db');
const Sequelize = require('sequelize');

const Customer = connection.define('Customer', {
  name: { type: Sequelize.STRING, allowNull: false },
  phone: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
});

Customer.sync({ force: false });

module.exports = Customer;