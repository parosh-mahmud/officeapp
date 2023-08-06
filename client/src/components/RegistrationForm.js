// src/components/RegistrationForm.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

const RegistrationForm = () => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch registration data from the form
    const fullName = e.target.elements.fullName.value;
    const email = e.target.elements.email.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const password = e.target.elements.password.value; // Add password field

    try {
      // Send registration data to the backend API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phoneNumber, password }), // Include password in the request body
      });

      if (response.ok) {
        // Registration successful, navigate to ChatWindow
        history.push('/'); // Replace '/chat' with the actual path of the ChatWindow page
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h4" component="h1" align="center">
              Register for the Office App
            </Typography>
            <Typography variant="h6" component="h2" color="textSecondary" align="center">
              Create your account
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                label="Full Name"
                name="fullName"
                placeholder="Enter your full name"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                margin="normal"
              />
              {/* Add confirm password field if needed */}
              <Button variant="contained" color="primary" fullWidth type="submit">
                Register
              </Button>
            </form>
            <Typography variant="subtitle1" color="textSecondary" align="center" style={{ marginTop: '1rem' }}>
              Already have an account? <Link to="/">Click here to login</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrationForm;
