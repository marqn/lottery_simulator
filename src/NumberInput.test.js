import React from "react";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import NumberInput from "./NumberInput";


test("isSetUpNumbers", () => {
  const ni = render(<NumberInput />);
});

