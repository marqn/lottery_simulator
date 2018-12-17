import React from "react";
import StartBtns from "./StartBtns";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
enzyme.configure({ adapter: new Adapter() });

// const { isNumberInputEmpty, intervalFn, startStopInterval, reset } = props;

test("check simple attribution to props", () => {
  const wrap = mount(<StartBtns isNumberInputEmpty={false} />);
  expect(wrap.prop("isNumberInputEmpty")).toEqual(false);
});

test("check button label depend on props (intervalFn)", () => {
  const wrap = mount(<StartBtns intervalFn={false} />);
  let btn = wrap.find(".startBtn");

  expect(btn.text()).toEqual("Rozpocznij losowanie");

  wrap.setProps({ intervalFn: true });
  expect(btn.text()).toEqual("Zatrzymaj");
});

test("disable/enable start/stop button", () => {
    const wrap = mount(<StartBtns isNumberInputEmpty={false} />)
    let btn = wrap.find(".startBtn");
    expect(btn.prop("disabled")).toEqual(true);
})

test("disable/enable reset button", () => {
    const wrap = mount(<StartBtns isNumberInputEmpty={false} />)
    let btn = wrap.find(".resetBtn");
    expect(btn.prop("disabled")).toEqual(true);
})

// test("simulate click start button", () => {
//   const wrap = shallow(<StartBtns />);
//   let btn = wrap.find(".startBtn");
//   btn.simulate("click");
// });
