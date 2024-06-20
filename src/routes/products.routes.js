const { Router } = require("express");
const ProductsController = require('../controllers/ProductsController');

const controller = new ProductsController();
const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);

module.exports = router;