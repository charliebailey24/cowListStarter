import React from 'react';
import App from '../index.js';
import axios from 'axios';

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addCow = this.addCow.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    console.log('new cow:::', this.state);
    this.addCow();
    this.setState({name: '', description: ''});
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addCow() {
    axios.post('/api/cows', {
      name: this.state.name,
      description: this.state.description
    })
    .then((response) => {
      console.log('axios POST response:::', response);
      this.props.getCows();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
        </label>
        <label>
          Description:
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Add"/>
      </form>
    )
  }
}

export default AddEntry;