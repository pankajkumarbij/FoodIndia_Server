const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

router.post('/addCart', cartController.CartPost);

router.get('/cart/:email', cartController.CartGetByEmail);

router.get('/carts', cartController.CartGet);

router.get('/deletecart/:email', cartController.CartDeleteByEmail);

module.exports = router;