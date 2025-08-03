const express = require('express');
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoutes');
const cartRoutes = require('./cartRoutes');
const orderRoutes = require('./orderRoutes');

const router = express.Router();

router.use(userRoutes);
router.use(itemRoutes);
router.use(cartRoutes);
router.use(orderRoutes);

module.exports = router;
