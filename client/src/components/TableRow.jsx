import React from 'react';
import Table from './Table.jsx';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <h4 onClick={() => {this.props.setSelected(this.props.cow)}}>{this.props.cow.name}</h4>
    );
  }
}

export default TableRow;