const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/orders', auth, createOrder);
router.get('/orders', auth, getOrders);

module.exports = router;
