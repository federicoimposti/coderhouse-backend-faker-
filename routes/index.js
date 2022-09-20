const express = require('express');
const router = express.Router();
const productFormRouter = require('./productForm');
const productsRouter = require('./products');
const productsFakerRouter = require('./productsFaker');

router.use('/', productFormRouter);
router.use('/productos', productsRouter);
router.use('/api/productos-test', productsFakerRouter);

module.exports = router;