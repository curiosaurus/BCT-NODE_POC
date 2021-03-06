const express = require('express');
const { body } = require('express-validator/check');

const orderController = require('../controllers/order');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /order/view
router.get('/view',isAuth, orderController.getmyOrders);

// POST /order/make
router.post('/make',isAuth, orderController.postmyOrder);

module.exports = router;