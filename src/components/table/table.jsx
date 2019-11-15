import React from 'react';
import './table.css';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = () => Object.keys(this.props.data[0]);

  getHeader = () => {
    const keys = this.getKeys();
    return keys.map(key => <th key={key}>{key.toUpperCase()}</th>);
  };

  getRowsData = () => {
    const items = this.props.data;
    const keys = this.getKeys();
    return items.map((row, index) => (
      <tr key={index}>
        <RenderRow key={index} data={row} keys={keys} />
        <td>
          <button
            type="button"
            onClick={() => this.props.removeCharacter(index)}
          >
            Delete
          </button>

          <button type="button" onClick={() => this.props.editCharacter(index)}>
            Edit
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.getHeader()}
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{this.getRowsData()}</tbody>
      </table>
    );
  }
}
const RenderRow = props =>
  props.keys.map(key => <td key={props.data[key]}>{props.data[key]}</td>);
