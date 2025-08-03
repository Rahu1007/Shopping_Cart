const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Order = sequelize.define('Order', {
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  }
});

module.exports = Order;
