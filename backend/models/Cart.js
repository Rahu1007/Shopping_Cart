const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cart = sequelize.define('Cart', {
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active'
  }
});

module.exports = Cart;
