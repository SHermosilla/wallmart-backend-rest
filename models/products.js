
const { Schema, model } = require('mongoose');

const ProductsSchema = Schema({
    id: {
        type: Number,
        unique: true
    },
    brand: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    }
});
ProductsSchema.methods.toJSON = function () {
    const { __v, Password, _id, uid, ...products } = this.toObject();
    return products;
}

module.exports = model('products', ProductsSchema, 'products');
