const { Router } = require("express");
const usersRoutes = require("./products.routes");

const router = Router();

router.use("/products", usersRoutes);

module.exports = router;