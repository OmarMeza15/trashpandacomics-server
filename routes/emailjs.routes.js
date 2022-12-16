const express = require("express");
const router = express.Router();
const axios = require("axios");
const Email = require("../models/Email.model");

router.post("/contact", async (req, res, next) => {
    const {email, name, question } = req.body
    // Send email
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.USER_ID,
      accessToken: process.env.accessToken,
      template_params: {
        email, 
        name, 
        question
      }
    }
    try {
        const newEmail = await Email.create(req.body)
        await axios.post("http://api.emailjs.com/api/v1.0/email/send", data)
        res.json(newEmail)

    } catch (err) {
        console.log(err)
    }
})




module.exports = router;