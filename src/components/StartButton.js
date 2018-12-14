import React from "react";

export default function StartButton(props) {
  const { isNumberInputEmpty, intervalFn, startStopInterval, reset } = props;

  const resetStyle = {
    margin:"5px",
    color:'red',
    fontWeight: 'bold'
  };

  return (
    <div>
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
      <button onClick={()=>reset()} style={resetStyle}>Reset</button>
    </div>
  );
}
