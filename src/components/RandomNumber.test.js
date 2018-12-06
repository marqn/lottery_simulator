import React from "react";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import RandomNumber from "./RandomNumber";

test("if empty return *", () => {
  const { getByText } = render(<RandomNumber />);

  expect(getByText("*"));
});

test("char 0 added", () => {
  const { getByText } = render(<RandomNumber number="5" />);

  expect(getByText("05"));
});
