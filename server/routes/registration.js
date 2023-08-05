const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { fullName, email, phoneNumber,password } = req.body;

    // Validate the data (you can add more validation as needed)

    // Create a new user document
    const newUser = new User({ fullName, email, phoneNumber,password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
