import * as React from "react";
import * as Utils from "./utils";

export default function DateCounter() {
  const [date, setDate] = React.useState(new Date());
  const increment = () => setDate((d) => Utils.incrementDate(d));

  return (
    <div>
      {/* cover data-testid in 02.test.js */}
      <p data-testid="date-display">{Utils.dateToString(date)}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
