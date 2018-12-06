import React from "react";
import { useState } from "react";
import "./NumberInput.css";

export default function NumberInput(props) {
  const numberOfSlots = 6;

  const [tab, setTab] = useState([0, 0, 0, 0, 0, 0]);

  const changeValue = e => {
    console.log(Number(e.target.id) + Number(parseInt(1)));
    setTab(
      tab.fill(
        Number(e.target.value),
        e.target.id,
        Number(e.target.id) + Number(parseInt(1))
      )
    );
    props.setInputNumbers(tab);
  };

  function createSlots() {
    let items = [];
    for (let i = 0; i < numberOfSlots; i++) {
      items.push(
        <input
          type="number"
          key={i}
          id={i}
          min="1"
          onChange={changeValue}
          max="99"
        />
      );
    }
    return items;
  }

  return <div>{createSlots()}</div>;
}
