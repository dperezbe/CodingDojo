const ProductModel = require('../models/Producto.Model');


exports.create = (req,res) => {
    try {
        let newproduct = new ProductModel(req.body);
        newproduct.save();
        res.send('Producto agregado correctamente');
    } catch (error) {
        res.send('El producto no se ha podido agregar correctamente');
    }
}

exports.show = (req,res) => {
    try {
        ProductModel.find({}).then( data => res.send(data));
    } catch (error) {
        res.send(error);
    }
}

exports.showById = (req,res) => {
    try {
        ProductModel.findById(req.params.id)
        .then(data =>  res.json({data:data, message:null, error:false}))
        .catch(error => res.json({data:null, message:error, error: true}));
    } catch (error) {
        res.send(error);
    }
}

module.exports.updateProduct = (request, response) => {
    ProductModel.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(data => response.json(data))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    ProductModel.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}