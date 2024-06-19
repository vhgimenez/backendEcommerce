const { Router } = require("express");
const ProductsController = require('../controllers/ProductsController');

const controller = new ProductsController();
const router = Router();

router.get("/", controller.getProducts);

module.exports = router;