import React, { Component } from "react";
import "./App.css";
import NumberInput from "./NumberInput";
import LotteryResults from "./components/LotteryResults";
import DrawnNumbers from "./components/DrawnNumbers";
import StartButton from "./components/StartButton";

class App extends Component {
  state = {
    settings: {
      name: "Duży Lotek",
      rangeOfNumbers: 46,
      numberOfSlots: 6
    },
    selectedNumbers: [],
    drawNumbers: [0, 0, 0, 0, 0, 0],
    drawCounter: 0,
    intervalFn: "",
    isNumberInputEmpty: false,
    numberOfWinings: [],
    winingsTab: []
  };

  getRandomValue = () => {
    return Math.ceil(Math.random() * this.state.settings.rangeOfNumbers);
  };

  compareNumbers = (a, b) => {
    return a - b;
  };

  getRandomNumbers = () => {
    const tab = Array.from({ length: this.state.settings.numberOfSlots }, () =>
      this.getRandomValue()
    );

    return tab.sort(this.compareNumbers);
  };

  startStopInterval = () => {
    this.state.intervalFn === "" && this.startTheDraw();
    this.state.intervalFn !== "" && this.stopTheDraw();
  };

  stopTheDraw = () => {
    clearInterval(this.state.intervalFn);
    this.setState({ intervalFn: "" });
  };

  fillNumberOfWinings = () => {
    if (this.state.numberOfWinings.length === 0) {
      let _tab = [];
      let _winingsTab = [];
      for (let i = 0; i < this.state.settings.numberOfSlots; i++) {
        _tab.push(0);
        _winingsTab.push([]);
      }
      this.setState({ numberOfWinings: _tab, winingsTab: _winingsTab });
    }
  };

  // result as Array [0,0,1,0,0,0]
  checkResults = (drawNumbers = [], selectNumbers = []) => {
    let equalCounter = 0;
    drawNumbers.map(dnr => {
      selectNumbers.map(snr => {
        if (snr === dnr) equalCounter++;
      });
    });

    this.fillNumberOfWinings();

    let val = this.state.numberOfWinings[equalCounter] + 1;
    let tab = this.state.numberOfWinings;
    tab[equalCounter] = val;

    let tabMatrix = this.state.winingsTab;

    tabMatrix[equalCounter].push(drawNumbers);
    console.log(tabMatrix);

    this.setState({ numberOfWinings: tab });
  };

  startTheDraw = () => {
    let intervalId = setInterval(() => {
      this.setState({
        drawNumbers: this.getRandomNumbers(),
        drawCounter: this.state.drawCounter + 1
      });
      this.checkResults(this.state.drawNumbers, this.state.selectedNumbers);
    }, 1000);

    this.setState({ intervalFn: intervalId });
  };

  setInputNumbers = (SelectedNumbers, isNumberInputEmpty) => {
    this.setState({
      selectedNumbers: SelectedNumbers,
      isNumberInputEmpty: isNumberInputEmpty
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lottery simulator - {this.state.settings.name}</h1>

          <DrawnNumbers tabNumbers={this.state.drawNumbers} />

          <NumberInput
            numberOfSlots={this.state.settings.numberOfSlots}
            setInputNumbers={this.setInputNumbers}
          />

          <StartButton
            isNumberInputEmpty={this.state.isNumberInputEmpty}
            intervalFn={this.state.intervalFn}
            startStopInterval={this.startStopInterval}
          />

          <LotteryResults data={this.state} />
        </header>
      </div>
    );
  }
}

export default App;
