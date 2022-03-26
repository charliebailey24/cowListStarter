import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddEntry from './components/AddEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    }
    this.getCows = this.getCows.bind(this);
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

  render() {
    var cowList = this.state.cows.map((item) => {
      return(
        <h4>{item.name}</h4>
      )
    });

    return (
      <>
      <h1>Welcome to Cow List!</h1>
      <AddEntry getCows={this.getCows}/>
      <div>{cowList}</div>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));