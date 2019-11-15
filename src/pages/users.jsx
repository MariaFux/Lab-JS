import React from 'react';
import Table from '../components/table/table';
import Form from '../components/form/form';
import EditForm from '../components/form/editForm';
import { AuthButton } from '../components/privateRoute';

class Users extends React.Component {
  state = { users: [] };

  componentDidMount() {
    this.loadData();
  }

  removeCharacter = (index) => {
    const { users } = this.state;
    console.log(index);

    this.setState({
      users: users.filter((user, i) => i !== index),
    });
  };

  handleSubmit = (user) => {
    this.setState({ users: [...this.state.users, user] });
  };

  loadData() {
    const url = '../users.json';

    fetch(url)
      .then(res => res.json())
      .then((myJson) => {
        this.setState({
          users: myJson,
        });
      });
  }

  render() {
    const { users } = this.state;

    const table = users.length === 0 ? (
      <div>Table is empty</div>
    ) : (
      <Table
        data={users}
        removeCharacter={this.removeCharacter}
        editCharacter={this.editCharacter}
      />
    );

    return (
      <div>
        <AuthButton />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '30px 30px',
          }}
        >
          <div>{table}</div>
          <div
            style={{
              margin: '0px 80px',
            }}
          >
            <Form handleSubmit={this.handleSubmit} />
            <EditForm editUser={this.editUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
