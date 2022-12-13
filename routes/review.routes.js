const express = require("express");
const router = express.Router();

const Review = require("../models/Review.model")
const fileUploader = require("../config/cloudinary.config")

// Create a new review
router.post("/reviews", async (req, res, next) => {
    // const { text, imageUrl } = req.body

    try {
        const newReview = await Review.create(req.body)
        res.json(newReview)
    } catch (err) {
        console.log(err)
    }
})

router.post("/reviews/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    res.json({ fileUrl: req.file.path });
  });

router.get("/reviews", async (req, res, next) => {
    try {
        const allReviews = await Review.find()
        res.json(allReviews)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;