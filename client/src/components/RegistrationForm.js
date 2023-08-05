// src/components/RegistrationForm.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

const RegistrationForm = () => {
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
            <form>
              <TextField
                fullWidth
                variant="outlined"
                label="Full Name"
                placeholder="Enter your full name"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                margin="normal"
              />
              {/* Add password and confirm password fields if needed */}
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
