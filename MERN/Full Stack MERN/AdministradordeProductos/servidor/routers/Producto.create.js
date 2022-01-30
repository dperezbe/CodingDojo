const ProductController = require('../controllers/Producto.controller');

module.exports = app => {
    app.get("/api/product/show", ProductController.show);
    app.get("/api/product/:id", ProductController.showById);
    app.post("/api/product/new", ProductController.create);
  };
  