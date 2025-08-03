const { Item } = require('../models');

const createItem = async (req, res) => {
  try {
    const { name } = req.body;
    const item = await Item.create({ name });
    res.status(201).json({ item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createItem, getItems };
