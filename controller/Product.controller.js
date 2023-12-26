const { Product } = require("../models/Product.model")

const ProductCotroller = {
    getAll: async (req, res) => {
        try {
            const products = await Product.find({})
            res.status(200).send(products)
        } 
        catch (error) {
            res.status(404).send("error")
        }
    },
    getByID: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Product.findById(id)
            res.status(200).send(target)
        }
        catch (error) {
            res.status(404).send("error")
        }
    },
    add: async (req, res) => {
        try {
            const { title, price, image } = req.body
            const newproduct = new Product({ title, price, image })
            await newproduct.save()
            res.status(201).send("new product")
        } 
        catch (error) {
            res.status(404).send("error")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { title, price, image } = req.body
            await Product.findByIdAndUpdate(id, { title, price, image })
            res.status(203).send("updated")
        } 
        catch (error) {
            res.status(404).send("error")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Product.findByIdAndDelete(id)
            res.status(204).send("deleted")
        } 
        catch (error) {
            res.status(404).send("error")
        }
    }
}
module.exports = { ProductCotroller }