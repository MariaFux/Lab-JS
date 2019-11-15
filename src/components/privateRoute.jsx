import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import './privateRoute.css';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (fakeAuth.isAuthenticated === true || localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

export const AuthButton = withRouter(({ history }) =>
  (fakeAuth.isAuthenticated ? (
    <div className="signOut">
      <p className="welcome">Welcome! </p>
      <button
        className="signOutBtn"
        type="submit"
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <p>You are not logged in.</p>
  )));

export default PrivateRoute;
