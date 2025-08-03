const express = require('express');
const { addToCart, getCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/carts', auth, addToCart);
router.get('/carts', auth, getCart);

module.exports = router;
