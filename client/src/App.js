// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/registration" component={RegistrationForm} />
        {/* Add more routes for other pages as your app grows */}
      </Switch>
    </Router>
  );
};

export default App;
