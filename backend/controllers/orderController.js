const { Order, Cart } = require('../models');

const createOrder = async (req, res) => {
  try {
    const { user } = req;
    const cart = await Cart.findOne({ where: { UserId: user.id } });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    const order = await Order.create({ CartId: cart.id });
    cart.status = 'ordered';
    await cart.save();
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const { user } = req;
    const orders = await Order.findAll({ include: [{ model: Cart, where: { UserId: user.id } }] });
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOrder, getOrders };
