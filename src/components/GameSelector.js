import React from "react";

export default function GameSelector() {
  return (
    <React.Fragment>
      <div>Select Game:</div>
      <form action="">
        <input type="radio" id="duzy" name="game" value="1" />
        <label for="duzy">Duży lotek</label>
        <input type="radio" id="maly" name="game" value="2" />
        <label for="maly">Maly lotek</label>
        <input type="radio" id="muti" name="game" value="3" />
        <label for="muti">Multi Lotek</label>
      </form>
    </React.Fragment>
  );
}
