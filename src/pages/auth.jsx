import React from 'react';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../components/privateRoute';
import './auth.css';

class Auth extends React.Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username !== 'admin' && password !== '12345') {
      return false;
    }
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  localStorage.setItem('token', username);

    return true;
  };

  handleChange = (e) => {
    const { value } = e.currentTarget;
    const { fieldName } = e.currentTarget.dataset;

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { username, password, redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <h2>Log In</h2>
        <form className="authForm" onSubmit={this.handleSubmit}>
          <input
            data-field-name="username"
            type="text"
            onChange={this.handleChange.bind(this)}
            placeholder="Имя"
            value={username}
          />
          <input
            data-field-name="password"
            type="text"
            onChange={this.handleChange.bind(this)}
            placeholder="Пароль"
            value={password}
          />
          <button className="authBtn" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;
