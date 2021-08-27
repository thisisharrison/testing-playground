import * as React from "react";
import ReactDOM from "react-dom";
import DateCounter3 from "../components/DateCounter3";
import * as Utils from "../utils";

/**
 * Takeaways:
 * 1) beforeEach
 * 2) creating our own "render" from jest
 * 3) mocking MouseEvents
 */
beforeEach(() => {
  document.body.innerHTML = "";
});

test("counter increments date by one", () => {
  // adds equivalent of <div className="App">
  const div = document.createElement("div");
  document.body.append(div);

  ReactDOM.render(<DateCounter3 />, div);
  const p = div.querySelector("p");
  const btn = div.querySelector("button");

  const today = new Date();
  const prev = Utils.dateToString(today);
  const next = Utils.dateToString(Utils.incrementDate(today));
  expect(p.textContent).toBe(prev);

  // synthetic click MouseEvent
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: false,
    button: 0,
  });
  btn.dispatchEvent(event);
  expect(p.textContent).toBe(next);
});
