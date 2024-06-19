exports.up = knex => knex.schema.createTable("products", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.date("description").notNullable();
    table.text("price").notNullable();
    table.text("image1").notNullable();             
    table.text("image2").notNullable();             
    table.text("image3").notNullable();             
    table.text("image4").notNullable();                          
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("products");