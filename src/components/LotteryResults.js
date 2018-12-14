import React from "react";

export default function LotteryResults(props) {
  const { drawCounter, winingsTab } = props.data;

  const plusStyle = {
    color: "green"
  };

  const minusStyle = {
    color: "red"
  };

  const styledValue = value => {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN"
    }).format(value);
  };

  const getNumber = nr => {
    let result = 0;
    winingsTab[nr] ? (result = winingsTab[nr].length) : (result = 0);
    return result;
  };

  const winningMoney = () => {
    return (
      getNumber(3) * 25 +
      getNumber(4) * 200 +
      getNumber(5) * 6000 +
      getNumber(6) * 2000000
    );
  };

  const spendMoney = () => {
    return drawCounter * 3;
  };

  const difference = () => {
    const diff = winningMoney() - spendMoney();
    let result = "";
    if (diff < 0) {
      result = <span style={minusStyle}>Na minusie: {styledValue(diff)}</span>;
    } else {
      result = <span style={plusStyle}>Na plusie: {styledValue(diff)}</span>;
    }
    return result;
  };

  return (
    <div>
      <p>Ilosc losowań: {drawCounter}</p>
      <p>
        <small> Kasa wydana na zaklady: {styledValue(spendMoney())}</small>
        <small> Kasa wygrana: {styledValue(winningMoney())}</small>
      </p>
      <p> {difference()}</p>
      <ul>
        <li>Wygrane:</li>
        <li><h1>Trafiona 6: {getNumber(6)}</h1></li>
        <li><h2>Trafiona 5: {getNumber(5)}</h2></li>
        <li><h3>Trafiona 4: {getNumber(4)}</h3></li>
        <li><h4>Trafiona 3: {getNumber(3)}</h4></li>
      </ul>
    </div>
  );
}
