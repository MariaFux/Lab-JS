import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PrivateRoute from '../privateRoute';
import Home from '../../pages/home';
import Users from '../../pages/users';
import Auth from '../../pages/auth';
import '../../pages/route.css';

export default function Authorize() {
  return (
    <Router>
      <div className="navList">
        <NavLink className="navLink" to="/">Home</NavLink>
        <NavLink className="navLink" to="/users">Users</NavLink>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/users" component={Users} />
    </Router>
  );
}
