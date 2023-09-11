//Import Modules
const express = require("express");

const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const axios = require("axios");
const loginRoute = require('./Router/loginRoute');
const signupRoute = require('./Router/SignupRoute');
const ProductsRoute = require("./Router/ProductsRoute")
const Order = require("./Router/OrderRoute")
const OrderDetails = require("./Router/OrderDetailsRoute")
const categoryDetails = require("./Router/CategoryRoute")



const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});
const PORT = process.env.PORT ;



const app = express();

app.use(express.json());
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());




// Use the login route
app.use('/login', loginRoute);

// Use the signup route
app.use('/signup', signupRoute);

// Use the dashboard route
app.use('/product', ProductsRoute);

// Use the order route
app.use('/order', Order);

// Use the order details route
app.use('/orderdetails', OrderDetails);

// Use the category route
app.use('/category', categoryDetails);

app.get('/', (req, res) => {
    res.send('Welcome to the Isystem e-commerce ');
  });


//   app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError) {
//         // Handle JSON parsing error
//         res.status(400).json({ error: 'Invalid JSON' });
//     } else {
//         // Forward other errors to the default Express error handler
//         next(err);
//     }
// });




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


