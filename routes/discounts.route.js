const { Router } = require('express');
const { check } = require('express-validator');
const { listDiscounts } = require('../controllers/discounts.controller');

const router = Router();


router.get('/list', [
], listDiscounts);

module.exports = router;