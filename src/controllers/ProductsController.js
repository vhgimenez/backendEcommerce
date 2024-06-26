const knex = require("../database");

class ProductsController {

    async getProducts(req, res) {

        const products = await knex("products");
        res.status(200).json(products);
        
    };

    async getProductsMale(req, res) {
        const products = await knex("products")
            .where("gender", "like", "%masculino%");
        res.status(200).json(products);
    }

    async getProductsFemale(req, res) {
        const products = await knex("products")
            .where("gender", "like", "%feminino%");
        res.status(200).json(products);
    }

    async getProductById(req, res) {
        const { id } = req.params;

        try {
            const product = await knex("products").where({ id }).first();

            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

}

module.exports = ProductsController;