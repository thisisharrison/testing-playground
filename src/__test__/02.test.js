import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateCounter from "../DateCounter";
import { setUpTestForToday } from "../test/test-utils";

test("counter increments date by one", () => {
  const { prev, next } = setUpTestForToday();
  render(<DateCounter />);
  const date = screen.getByTestId("date-display");
  // const btn = screen.getByRole("button", { name: /increment/i });
  const btn = screen.getByRole("button", { name: /increment/i });

  expect(date).toHaveTextContent(prev);
  userEvent.click(btn);
  expect(date).toHaveTextContent(next);
});
