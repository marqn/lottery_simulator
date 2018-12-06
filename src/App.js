import React, { Component } from "react";
import "./App.css";
import NumberInput from "./NumberInput";
import LotteryResults from "./components/LotteryResults";
import DrawnNumbers from "./components/DrawnNumbers";

class App extends Component {
  state = {
    selectedNumbers: [],
    drawNumbers: [1, 12, 21, 31, 45, 48],
    drawCounter: 0,
    intervalFn: ""
  };

  getRandomValue = () => {
    return Math.ceil(Math.random() * 46);
  };

  startStopInterval = () => {
    this.state.intervalFn == "" && this.startTheDraw();
    this.state.intervalFn != "" && this.stopTheDraw();
  };

  stopTheDraw = () => {
    clearInterval(this.state.intervalFn);
    this.setState({ intervalFn: "" });
  };

  startTheDraw = () => {
    let intervalId = setInterval(() => {
      const arr = Array.from({ length: 6 }, () => this.getRandomValue());
      this.setState({
        drawNumbers: arr,
        drawCounter: this.state.drawCounter + 1
      });
      console.log(this.state.inputNumbers);
    }, 1000);

    this.setState({ intervalFn: intervalId });
  };

  setInputNumbers = SelectedNumbers => {
    this.setState({ selectedNumbers: SelectedNumbers });
    console.log(SelectedNumbers);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lottery simulator</h1>

          <DrawnNumbers tabNumbers={this.state.drawNumbers} />

          <NumberInput setInputNumbers={this.setInputNumbers} />

          <button onClick={() => this.startStopInterval()}>
            {!this.state.intervalFn ? (
              <span>Rozpocznij losowanie</span>
            ) : (
              <span>Zatrzymaj</span>
            )}
          </button>

          <LotteryResults data={this.state} />
        </header>
      </div>
    );
  }
}

export default App;
