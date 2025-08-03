const express = require('express');
const { signup, login, getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/users', signup);
router.post('/users/login', login);
router.get('/users', getUsers);

module.exports = router;
