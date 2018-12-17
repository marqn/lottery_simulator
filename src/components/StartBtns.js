import React from "react";

export default function StartBtns(props) {
  const { isNumberInputEmpty, intervalFn, startStopInterval, reset } = props;

  const resetStyle = {
    margin: "5px",
    color: "red",
    fontWeight: "bold"
  };

  return (
    <div>
      <button className="startBtn" disabled={!isNumberInputEmpty} onClick={() => startStopInterval()} > 
        {intervalFn ? "Zatrzymaj" : "Rozpocznij losowanie"}
      </button>
      <button className="resetBtn" onClick={()=>reset()} disabled={!isNumberInputEmpty} style={resetStyle}>
        Reset
      </button>
    </div>
  );
}
