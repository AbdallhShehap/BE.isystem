const express = require('express');
const router = express.Router();
const orderDetails = require("../Controller/OrderDetailsController")

router.post('/add' , orderDetails.addOrder);

router.put("/edit/:id" , orderDetails.editOrder);

router.delete("/delete/:id", orderDetails.deleteOrder)

module.exports = router