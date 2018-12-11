import React from "react";

export default function RandomNumber(props) {
  const convertNumber = nr => {
    if (nr < 10 && nr > 0) return "0" + nr;
    else return nr;
  };

  return (
    <React.Fragment>
      {(!props.number || props.number === '0' || props.number === 0) ? (
        <span>*</span>
      ) : (
        <span>{convertNumber(props.number)}</span>
      )}
    </React.Fragment>
  );
}
