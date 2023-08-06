// src/components/ChatWindow.js
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook

const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // State to store the messages
  const [newMessage, setNewMessage] = useState(''); // State to handle new message input

  // Get user data from the location state
  const location = useLocation();
  const user = location.state?.user || {};
  
  const handleSendMessage = () => {
    // Function to handle sending a new message
    if (newMessage.trim() === '') {
      return; // Ignore empty messages
    }

    // Create a new message object with current timestamp
    const newMessageObj = {
      text: newMessage.trim(),
      timestamp: new Date().toLocaleString(),
    };

    // Append the new message to the list of messages
    setMessages((prevMessages) => [...prevMessages, newMessageObj]);

    // Clear the input field after sending the message
    setNewMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', minHeight: '400px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Chat Window
        </Typography>
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {/* Display the list of messages */}
          {messages.map((message, index) => (
            <div key={index}>
              <Typography variant="body1" gutterBottom>
                {message.text}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {message.timestamp}
              </Typography>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default ChatWindow;
