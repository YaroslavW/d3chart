import React, { Component } from 'react';
import BarChart from './Components/BarChart';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[500, 400, 232, 200, 233, 120, 78, 100]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Simple D3-react-application</h1>
        <BarChart data={this.state.data} />
        <h3>Hover over the chart to see the exact value.</h3>
      </div>
    );
  }
}

export default App;
