
const { Router } = require("express");
const productsFaker = Router();

const controller = require("../controllers/products")

productsFaker.get("/", (req, res) => { 
    console.log('se ejecuta')
  controller.getAllFaker()
  .then((data) => {      
    res.status(200).send(data); 
  })

});

module.exports = productsFaker;