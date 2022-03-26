import React from 'react';
import Table from './Table.jsx';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.cow.handleClick = this.handleClick;

    if (this.state.isClicked) {
      this.props.setSelected(null);
    } else {
      this.props.setSelected(this.props.cow);
    }

    this.setState({isClicked: !this.state.isClicked}, function() {
      console.log('this.state.isClicked:::', this.state.isClicked);
    });

    // (this.state.isClicked) ? this.props.setSelected(null) : this.props.setSelected(this.props.cow);
  }

  render() {
    console.log('this.state.isClicked:::', this.state.isClicked);
    if (this.state.isClicked) {
      return null;
    } else {
      return (
        <h4 onClick={this.handleClick}>{this.props.cow.name}</h4>
      );
    }

    // if (this.state.isClicked) {
    //   return (
    //     <>
    //     <h4 onClick={this.handleClick}>{this.props.cow.name}</h4>
    //     <p>{this.props.cow.description}</p>
    //     </>
    //   )
    // } else {
    //   return(
    //     <h4 onClick={this.handleClick}>{this.props.cow.name}</h4>
    //     )
    // }
  }
}

export default TableRow;