import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Md Abdus Sabur'
    };
  }
  componentDidMount() {
  this.getUsers();
}

  getUsers() {
  axios
    .get("http://schoolbook.bizworldbd.com/hello.php")
    .then(response => console.log(response))
    .catch(error => this.setState({ error, isLoading: false }));
}

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
