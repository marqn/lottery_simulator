import React from "react";

export default function RandomNumber(props) {
  const convertNumber = nr => {
    if (nr < 10) return "0" + nr;
    else return nr;
  };

  return (
    <React.Fragment>
      {!props.number && <span>*</span>}
      {props.number && <span>{convertNumber(props.number)}</span>}
    </React.Fragment>
  );
}
