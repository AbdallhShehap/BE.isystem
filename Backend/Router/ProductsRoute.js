const express = require('express');
const router = express.Router();
const products = require("../Controller/ProductsController")

router.post('/add',products.addProduct );


router.put('/edit/:id', products.editProduct );


router.delete('/delete/:id', products.deleteProduct );

module.exports = router
