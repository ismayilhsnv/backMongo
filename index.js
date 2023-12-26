const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const ProductRouter = require("./routes/Product.routes")
const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://Ismayil:ismayil123@ismayil.dthncvf.mongodb.net/start").then(res => {
    console.log("connected");
})
app.use("/products", ProductRouter)
app.listen(PORT, () => {
    console.log("port is activated");
})