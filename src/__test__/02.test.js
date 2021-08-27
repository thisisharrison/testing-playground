import * as React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateCounter3 from "../components/DateCounter3";
import {setUpTestForToday} from "../test/test-utils";

/**
 * Takeaways:
 * 1) util functions to set up tests
 * 2) screen feature from @testing-library/react
 * 3) accessibility
 * 4) userEvent from @testing-library/user-event
 */
test("counter increments date by one", () => {
  const {prev, next} = setUpTestForToday();
  render(<DateCounter3 />);
  const date = screen.getByTestId("date-display");
  const btn = screen.getByRole("button", {
    name: /\+1/i,
  });

  expect(date).toHaveTextContent(prev);
  userEvent.click(btn);
  expect(date).toHaveTextContent(next);
});
