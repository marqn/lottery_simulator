import React from "react";

export default function LotteryResults(props) {
  const { drawCounter } = props.data;

  return (
    <div>
      <p>Ilosc losowań: {drawCounter}</p>
      <p>Kasa wydana na zaklady: {drawCounter * 3} zl</p>
      <ul>
        <li>Wygrane: 0</li>
        <li>Trafiona 3: 0</li>
        <li>Trafiona 5: 0</li>
        <li>Trafiona 6: 0</li>
      </ul>
    </div>
  );
}
