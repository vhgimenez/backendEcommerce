const knex = require("../database");

class ProductsController {

    async getProducts(req, res) {

        const products = await knex("products");
        res.status(200).json(products);
        
    };

}

module.exports = ProductsController;