import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Admin from './admin';
import About from './about';
import ManageAccounts from './manageAccounts';
import CreateAccount from './createAccount';
import Profile from './profile';
import AdminHome from './adminHome';
import AnimatedBackground from './AnimatedBackground';

function App() {
  return (
    <Router>
      <AnimatedBackground /> {/* Include AnimatedBackground component */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/home" exact component={AdminHome} />
        <Route path="/admin/about" exact component={About} />
        <Route path="/admin/manage" exact component={ManageAccounts} />
        <Route path="/admin/createAccount" exact component={CreateAccount} />
        <Route path="/admin/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
