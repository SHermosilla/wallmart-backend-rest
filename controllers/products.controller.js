const { response, request } = require('express');
const Products = require('../models/products');




const listProducts = async (req = request, res = response) => {
    const products = await Products.find();
    res.json({
        products
    });
}

module.exports = {
    listProducts
}