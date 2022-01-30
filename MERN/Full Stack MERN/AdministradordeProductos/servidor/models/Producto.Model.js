var mongoose = require('mongoose');

var Producto = mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}

  });

  module.exports = mongoose.model('product', Producto);
