const express = require("express");
const router = express.Router();

const Product = require("../models/Product.model")
const fileUploader = require("../config/cloudinary.config")

// Create a new review
router.post("/new-product", async (req, res, next) => {
    // const { text, imageUrl } = req.body
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (err) {
        console.log(err)
    }
})

router.post("/new-product/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    res.json({ fileUrl: req.file.path });
});

router.get("/shop", async (req, res, next) => {
    try {
        const allProducts = await Product.find()
        res.json(allProducts)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;