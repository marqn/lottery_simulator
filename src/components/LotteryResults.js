import React from "react";

export default function LotteryResults(props) {
  const { drawCounter, winingsTab } = props.data;

  const plusStyle = {
    color:'green'
  };
  
  const minusStyle = {
    color:'red'
  };

  const getNumber = nr => {
    let result = 0;
    winingsTab[nr] ? (result = winingsTab[nr].length) : (result = 0);
    return result;
  };

  const winningMoney = () => {
    return (
      getNumber(2) * 25 +
      getNumber(3) * 200 +
      getNumber(4) * 6000 +
      getNumber(5) * 2000000
    );
  };

  const spendMoney = () => {
    return drawCounter * 3;
  };

  const difference = () => {
    const diff = winningMoney() - spendMoney();
    let result = "";
    if (diff < 0) {
      result = <span style={minusStyle}>Na minusie: {diff} PLN</span>;
    } else {
      result = <span style={plusStyle}>Na plusie: {diff} PLN</span>;
    }
    return result;
  };

  return (
    <div>
      <p>Ilosc losowań: {drawCounter}</p>
      <p>
        <span> Kasa wydana na zaklady: {spendMoney()} PLN</span>
        <span> Kasa wygrana: {winningMoney()} PLN</span>
      </p>
      <p> {difference()}</p>
      <ul>
        <li>Wygrane: 0</li>
        <li>Trafiona 3: {getNumber(2)}</li>
        <li>Trafiona 4: {getNumber(3)}</li>
        <li>Trafiona 5: {getNumber(4)}</li>
        <li>Trafiona 6: {getNumber(5)}</li>
      </ul>
    </div>
  );
}
