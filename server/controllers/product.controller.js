const Product = require('../models/product.model')

module.exports = {

    createProduct:
        (req, res) => {
            Product.create(req.body)
                .then((newProduct) => {
                    console.log(newProduct)
                    res.json(newProduct)
                })
                .catch(err => {
                    console.log('Creating a New Product Failed')
                    res.status(400).json({ message: 'Something went wrong in createProduct', error: err })
                })
        },

    findAllProducts:
        (req, res) => {
            Product.find()
                .then((allProducts) => {
                    console.log(allProducts)
                    res.json(allProducts)
                })
                .catch(err => {
                    console.log('Find all Products Failed')
                    res.json({ message: 'Something went wrong in findAllProducts', error: err })
                })
        },

    findOneProduct:
        (req, res) => {
            Product.findOne({ _id: req.params.id })
                .then((oneProduct) => {
                    console.log(oneProduct)
                    res.json(oneProduct)
                })
                .catch(err => {
                    console.log('Find one Product Failed')
                    res.json({ message: 'Something went wrong in findOneProduct', error: err })
                })
        },

    updateOneProduct:
        (req, res) => {
            Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then((updatedGame) => {
                    console.log(updatedGame)
                    res.json(updatedGame)
                })
                .catch(err => {
                    console.log('Updating the Product Failed')
                    res.status(400).json({ message: 'Something went wrong with updateOneGame', error: err })
                })
        },

    deleteOneProduct:
        (req, res) => {
            Product.deleteOne({ _id: req.params.id })
                .then((deletedGame) => {
                    console.log(deletedGame)
                    res.json(deletedGame)
                })
                .catch(err => {
                    console.log('Deleting one Product Failed')
                    res.json({ message: 'Something went wrong in deleteOneProduct', error: err })
                })
        }

}