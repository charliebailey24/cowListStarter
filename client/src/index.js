import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddEntry from './components/AddEntry.jsx';
import Table from './components/Table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // alter array removing clicked cow
      cows: [],
      selected: null,
      // isClicked: false
    }
    this.getCows = this.getCows.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios.get('/api/cows')
    .then((response) => {
      this.setState({cows: response.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  setSelected(selectedCow) {
    var selectedRemoved = this.state.cows.filter((currentCow) => {
      return currentCow.id !== selectedCow.id;
    });

    this.setState({cows: selectedRemoved, selected: selectedCow});
  }

  render() {

    if (this.state.selected) {
      return (
        <>
        <h1>Welcome to Cow List!</h1>
        <>
          <h4 onClick={this.state.selected.handleClick}>{this.state.selected.name}</h4>
          <p>{this.state.selected.description}</p>
        </>
        <AddEntry getCows={this.getCows} />
        <Table setSelected={this.setSelected} cows={this.state.cows} />
        </>
      );
    } else {
      return (
        <>
        <h1>Welcome to Cow List!</h1>
        <AddEntry getCows={this.getCows} />
        <Table setSelected={this.setSelected} cows={this.state.cows} />
        </>
      );
    }
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));