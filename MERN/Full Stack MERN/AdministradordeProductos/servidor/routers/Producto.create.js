const ProductController = require('../controllers/Producto.controller');

module.exports = app => {
    app.post("/api/product/new", ProductController.create);
  };
  