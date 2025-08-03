const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'available'
  }
});

module.exports = Item;
