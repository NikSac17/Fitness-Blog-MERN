const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { body, validationResult } = require("express-validator");

//route 1: fill contact form using POST "/api/contact/fillcontact"
router.post(
  "/fillcontact",
  [body("name", "Enter valid name").isLength({ min: 3 })],
  async (req, res) => {
    try {
      const { name, email, profession, doubt, feedback } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const contact = new Contact({
        name,
        email,
        profession,
        doubt,
        feedback,
      });

      const saveContact = await contact.save();
      res.send(saveContact);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
