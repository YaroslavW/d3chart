import React, { Component } from 'react';
import BarChart from './Components/BarChart';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [100, 400, 232, 280, 630, 120, 78, 262, 380, 30]
    }
  }
  render() {
    return (
      <div className="App">
        <BarChart data={this.state.date} />
      </div>
    );
  }
}

export default App;
