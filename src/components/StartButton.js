import React from "react";

export default function StartButton(props) {
  const { isNumberInputEmpty, intervalFn, startStopInterval } = props;

  return (
    <button
      disabled={!isNumberInputEmpty}
      onClick={() => startStopInterval()}
    >
      {!intervalFn ? (
        <span>Rozpocznij losowanie</span>
      ) : (
        <span>Zatrzymaj</span>
      )}
    </button>
  );
}
