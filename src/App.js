import React, { Component } from 'react';
import './App.css';
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles"

class App extends Component {
  constructor() {
    super(); {
      this.state = {
        selButtonIdx: 1
      }
    }
  }

  handleButtonSelection = (buttonIdx) => {
    this.setState({
      selButtonIdx: buttonIdx,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selButtonIdx={this.state.selButtonIdx}
            handleButtonSelection={this.handleButtonSelection} />
          <Circles selButtonIdx={this.state.selButtonIdx} />
        </main>
      </div>
    );
  }
}

export default App;
