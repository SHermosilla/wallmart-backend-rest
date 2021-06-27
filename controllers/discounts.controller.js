const { response, request } = require('express');
const Discounts = require('../models/discounts');




const listDiscounts = async (req = request, res = response) => {
    const discounts = await Discounts.find();
    res.json({
        discounts
    });
}

module.exports = {
    listDiscounts
}