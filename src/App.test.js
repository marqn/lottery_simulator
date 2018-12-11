import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("getRandomValue test", () => {
  const wrapper = shallow(<App />);

  let drawNumbers = [1, 2, 3];
  let selectNumbers = [1, 2, 3];
  wrapper.instance().checkResults(drawNumbers, selectNumbers);

  expect(wrapper.state("numberOfWinings")).toEqual([0, 0, 0, 1, 0, 0]);

  drawNumbers = [1, 2, 3, 4];
  selectNumbers = [1, 2, 3, 4];
  wrapper.instance().checkResults(drawNumbers, selectNumbers);

  expect(wrapper.state("numberOfWinings")).toEqual([0, 0, 0, 1, 1, 0]);
});

test("is numbers sorted ", () => {
  
});
