import React from "react";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import RandomNumber from "./RandomNumber";

test("if empty return *", () => {
  const { getByText } = render(<RandomNumber />);

  expect(getByText("*"));
});

test("simple input data", () => {
  const { getByText } = render(<RandomNumber number="55" />);
  expect(getByText("55"));
});

test("char 0 added", () => {
  const { getByText } = render(<RandomNumber number="5" />);
  expect(getByText("05"));
});

test("default 0", () => {
  const { getByText } = render(<RandomNumber number="" />);
  expect(getByText("*"));
});

test("default 0 no.2", () => {
  const { getByText } = render(<RandomNumber number="0" />);
  expect(getByText("*"));
});
