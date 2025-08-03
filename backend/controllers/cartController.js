const { Cart, CartItem, Item } = require('../models');

const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const { user } = req;
    let cart = await Cart.findOne({ where: { UserId: user.id } });
    if (!cart) {
      cart = await Cart.create({ UserId: user.id });
    }
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    const cartItem = await CartItem.findOne({ where: { CartId: cart.id, ItemId: item.id } });
    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      await CartItem.create({ CartId: cart.id, ItemId: item.id });
    }
    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const { user } = req;
    const cart = await Cart.findOne({ where: { UserId: user.id }, include: [Item] });
    res.json({ cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addToCart, getCart };
