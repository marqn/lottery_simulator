import React, { Component } from "react";
import "./App.css";
import NumberInput from "./NumberInput";
import LotteryResults from "./components/LotteryResults";
import DrawnNumbers from "./components/DrawnNumbers";
import StartButton from "./components/StartButton";

const initialState = {
  settings: {
    name: "Duży Lotek",
    rangeOfNumbers: 46,
    numberOfSlots: 6,
    interval: 1
  },
  selectedNumbers: [],
  drawNumbers: [0, 0, 0, 0, 0, 0],
  drawCounter: 0,
  intervalFn: "",
  isNumberInputEmpty: false,
  numberOfWinings: [],
  winingsTab: []
};

class App extends Component {
  state = initialState;

  getRandomValue = () => {
    return Math.ceil(Math.random() * this.state.settings.rangeOfNumbers);
  };

  compareNumbers = (a, b) => {
    return a - b;
  };

  getRandomNumbers = () => {
    let tab = Array.from({ length: this.state.settings.numberOfSlots }, () =>
      this.getRandomValue()
    );

    while (!this.isUniqueValues(tab)) {
      tab = Array.from({ length: this.state.settings.numberOfSlots }, () =>
        this.getRandomValue()
      );
    }
    

    return tab.sort(this.compareNumbers);
  };

  isUniqueValues = tab => {
    let result = true;
    let duplicates = tab.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
      return acc;
    }, []);
    if (duplicates.length > 0) result = false;

    return result;
  };

  reset = () => {
    let selectedNumbers = this.state.selectedNumbers;
    this.setState(initialState);
    this.setState({ isNumberInputEmpty: true, selectedNumbers:selectedNumbers });

    console.log(this.state);
  };
  startStopInterval = () => {
    this.state.intervalFn === "" && this.startTheDraw();
    this.state.intervalFn !== "" && this.stopTheDraw();
  };

  stopTheDraw = () => {
    clearInterval(this.state.intervalFn);
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
        return "";
      });
      return "";
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
    // let counter = 0;
    let intervalId = setInterval(() => {
      this.setState({
        drawNumbers: this.getRandomNumbers(),
        drawCounter: this.state.drawCounter + 1
      });
      this.checkResults(this.state.drawNumbers, this.state.selectedNumbers);
      // counter++;
      // if (counter > 333) {
      //   this.stopTheDraw();
      // }
    }, this.state.settings.interval);

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
            reset={this.reset}
          />

          <LotteryResults data={this.state} />
        </header>
      </div>
    );
  }
}

export default App;
