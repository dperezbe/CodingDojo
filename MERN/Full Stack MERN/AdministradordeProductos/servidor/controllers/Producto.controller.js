const ProductModel = require('../models/Producto.Model');


exports.create = (req,res) => {
    try {
        console.log(req.body);
        let newproduct = new ProductModel(req.body);
        newproduct.save();
        res.send('Producto agregado correctamente');
    } catch (error) {
        res.send('El producto no se ha podido agregar correctamente');
    }
}