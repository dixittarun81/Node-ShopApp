const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const adminData = require('./admin');

const router = express.Router();

router.get('/',shopController.getIndex);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.checkout);
router.get('/products',shopController.getProducts);



module.exports = router;
