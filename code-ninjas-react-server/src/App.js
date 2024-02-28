import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './home';
import Admin from './admin';
import CreateAccount from './createAccount';
import Profile from './profile';
import AdminHome from './adminHome';
import AnimatedBackground from './AnimatedBackground';
import HamburgerMenu from './hamburgerMenu';

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Switch>
        <Route path="/admin/home" exact component={AdminHome} />
        <Route path="/admin/createAccount" exact component={CreateAccount} />
        <Route path="/admin/profile" exact component={Profile} />
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Home} />
      </Switch>
      <HamburgerMenuWithCondition />
    </Router>
  );
}


// Create a separate component to conditionally render HamburgerMenu
function HamburgerMenuWithCondition() {
  const location = useLocation();

  // Check if the current path is neither '/' nor '/admin', if yes, render HamburgerMenu
  const shouldRenderHamburgerMenu = !['/', '/admin'].includes(location.pathname);

  return shouldRenderHamburgerMenu ? <HamburgerMenu /> : null;
}

export default App;