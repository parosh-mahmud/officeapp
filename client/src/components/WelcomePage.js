import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

const WelcomePage = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h4" component="h1" align="center">
              Welcome to the Office App
            </Typography>
            <Typography variant="h6" component="h2" color="textSecondary" align="center">
              Login using your email and password
            </Typography>
            <form>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                placeholder="Enter your email"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                placeholder="Enter your password"
                margin="normal"
              />
              <Button variant="contained" color="primary" fullWidth type="submit">
                Login
              </Button>
            </form>
            <Typography variant="subtitle1" color="textSecondary" align="center" style={{ marginTop: '1rem' }}>
              Are you new here? <Link to="/registration">Click here to register</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomePage;
