const sequelize = require('../database');
const User = require('./User');
const Item = require('./Item');
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const Order = require('./Order');

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Item, { through: CartItem });
Item.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(Cart);
Cart.hasOne(Order);

const models = {
  User,
  Item,
  Cart,
  CartItem,
  Order,
  sequelize
};

module.exports = models;
