import React from "react";

export default function GameSelector() {

const labelStyle = {
    'fontSize':'12pt'
}

  return (
    <React.Fragment>
      <div>Select Game:</div>
      <form action="">
        <input type="radio" id="duzy" name="game" value="1" />
        <label style={labelStyle} htmlFor="duzy">Duży lotek</label>
        <input type="radio" id="maly" name="game" value="2" />
        <label style={labelStyle} htmlFor="maly">Maly lotek</label>
        <input type="radio" id="muti" name="game" value="3" />
        <label style={labelStyle} htmlFor="muti">Multi Lotek</label>
      </form>
    </React.Fragment>
  );
}
