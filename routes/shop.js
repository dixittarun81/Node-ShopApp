const path = require('path');

//setting up router functionality
const express = require('express');
const router = express.Router();

//importing shopcontroller
const shopController = require('../controllers/shop');


//Routing all the functions related to shopping context
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
