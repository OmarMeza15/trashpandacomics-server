const express = require("express");
const router = express.Router();

const Product = require("../models/Product.model")
const fileUploader = require("../config/cloudinary.config")

// Create a new product
router.post("/new-product", async (req, res, next) => {
    // const { text, imageUrl } = req.body
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (err) {
        console.log(err)
    }
})

// Upload an image for the product
router.post("/new-product/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    res.json({ fileUrl: req.file.path });
});

// Get all the products
router.get("/shop", async (req, res, next) => {
    try {
        const allProducts = await Product.find()
        res.json(allProducts)
    } catch (err) {
        console.log(err)
    }
})

// Get all the details of the product
router.get("/shop/:id/details", async (req, res, next) => {
    const {id} = req.params
    console.log('------->', id)
    try {
        const allDetails = await Product.findById(id)
        res.json(allDetails)
    } catch (err) {
        console.log(err)
    }
})

// Update the product
router.put("/shop/:id/details/edit", async (req, res, next) => {
    const id = req.params
    const newData = req.body
    try {
        const updateProduct = await Product.findOneAndUpdate({_id: req.params.id}, newData, {new: true})
        res.json(updateProduct) 
    } catch (err) {
        console.log(err)
    }
})

// Delete the product
router.delete("/shop/:id/details", async (req, res, next) => {
    const id = req.params
    try {
        await Product.deleteOne({_id: req.params.id})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;