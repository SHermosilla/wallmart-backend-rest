const { Router } = require('express');
const { check } = require('express-validator');
const { listProducts } = require('../controllers/products.controller');

const router = Router();


router.get('/list', [
], listProducts);

module.exports = router;