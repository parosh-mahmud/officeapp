import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import RegistrationForm from './components/RegistrationForm';
import ChatWindow from './components/ChatWindow'; // Import the ChatWindow component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/chat" component={ChatWindow} /> {/* Add the route for ChatWindow */}
        {/* Add more routes for other pages as your app grows */}
      </Switch>
    </Router>
  );
};

export default App;
