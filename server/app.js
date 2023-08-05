const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/officeapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import and use the registration route
const registrationRoutes = require('./routes/registration');
app.use('/api/register', registrationRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
