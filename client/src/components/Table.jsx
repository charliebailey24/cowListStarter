import React from 'react';
import App from '../index.js';
import TableRow from './TableRow.jsx';

function Table(props) {
  var cowList = props.cows.map((cow) => {
    return(
      <>
      <TableRow key={cow.id} setSelected={props.setSelected} cow={cow}/>
      </>
    )
  });
  return (<div>{cowList}</div>);
}

export default Table;