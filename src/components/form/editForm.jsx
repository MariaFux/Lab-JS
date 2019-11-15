import React from 'react';
import './form.css';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', email: '', age: '' };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(() => ({
      userName: '', email: '', age: '',
    }));
  };

  render() {
    const { userName, email, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            // value={userName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            // value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Age:
          <input
            className="num"
            type="number"
            name="age"
            min="1"
            // value={age}
            onChange={this.handleChange}
          />
        </label>
        <input className="btn" type="submit" value="Add" />
      </form>
    );
  }
}
