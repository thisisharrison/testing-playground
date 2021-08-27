import * as React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {DateCounter} from "../components/DateCounter4";
import {setUpTestForToday} from "../test/test-utils";

/**
 * Takeaways:
 * 1) util functions to set up tests
 * 2) jest mock functions
 */

function setUpDateCounter() {
  const {today, prev, next} = setUpTestForToday();
  const increment = jest.fn();
  render(<DateCounter date={today} increment={increment} />);
  const date = screen.getByTestId("date-display");
  const btn = screen.getByRole("button", {
    name: /\+1/i,
  });
  return {today, prev, next, date, btn, increment};
}

test("counter calls increment once", () => {
  const {prev, next, date, btn, increment} = setUpDateCounter();
  expect(date).toHaveTextContent(prev);
  userEvent.click(btn);
  expect(increment).toBeCalledTimes(1);
});
