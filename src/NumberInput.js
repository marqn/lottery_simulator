import React from "react";
import { useState } from "react";
import "./NumberInput.css";

export default function NumberInput(props) {
  const { numberOfSlots } = props;

  const [tab, setTab] = useState(() => {
    let initTab = [];
    for (let i = 0; i < numberOfSlots; i++) {
      initTab.push(0);
    }
    return initTab;
  });

  const isSetUpNumbers = () => {
    let result = true;
    tab.map(e => {
      if (e === 0) result = false;
      return result;
    });
    return result;
  };

  const changeValue = e => {
    setTab(
      tab.fill(
        Number(e.target.value),
        e.target.id,
        Number(e.target.id) + Number(parseInt(1))
      )
    );
    props.setInputNumbers(tab, isSetUpNumbers());
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
