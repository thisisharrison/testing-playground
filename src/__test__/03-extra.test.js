import * as React from "react";
import {render, screen} from "@testing-library/react";
import {DateCounter} from "../components/DateCounter4";
import {dateToString, incrementDate} from "../utils";
import userEvent from "@testing-library/user-event";

/**
 * Takeaways: 
 * 1) Mocking a util file
 * 2) Test arguments of util functions
 */
jest.mock("../utils.js");

test("dateString function should be called with date", () => {
  const increment = jest.fn();
  const day = new Date(2021, 0, 1);

  dateToString.mockReturnValue("mockDateString");
  render(<DateCounter date={day} increment={increment} />);

  expect(screen.getByText("mockDateString")).toBeInTheDocument();
  expect(dateToString).toHaveBeenCalledWith(day);
});
