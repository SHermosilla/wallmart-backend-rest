
const { Schema, model } = require('mongoose');

const DiscountsSchema = Schema({
    brand: {
        type: String
    },
    threshold: {
        type: String
    },
    discount: {
        type: Number
    }
});


module.exports = model('discounts', DiscountsSchema, 'discounts');
