import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

const WelcomePage = () => {
  const history = useHistory();
  const [email, setEmail] = useState(''); // Initialize email state
  const [password, setPassword] = useState(''); // Initialize password state
  const [loginError, setLoginError] = useState(false); // Initialize loginError state

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Send the email and password to the backend for login
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Login successful, navigate to the ChatWindow page
        history.push('/chat', { user: data.user }); // Pass the user data to the ChatWindow page
      } else {
        // Login failed, set loginError to true
        setLoginError(true);
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
              Welcome to the Office App
            </Typography>
            <Typography variant="h6" component="h2" color="textSecondary" align="center">
              Login using your email and password
            </Typography>
            {/* Add the onSubmit attribute to the form */}
            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                placeholder="Enter your email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                placeholder="Enter your password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginError && (
                <Typography variant="subtitle1" color="error" align="center" style={{ marginBottom: '0.5rem' }}>
                  Email and password do not match.
                </Typography>
              )}
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
