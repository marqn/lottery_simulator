import React from "react";
import RandomNumber from "./RandomNumber";

export default function DrawnNumbers(props) {
  return (
    <div>
      {!props.tabNumbers && <div>Empty numbers</div>}
      {props.tabNumbers && (
        <ul className="inline">
          {props.tabNumbers.map((nr, index) => (
            <li key={index}>
              <RandomNumber number={nr} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
