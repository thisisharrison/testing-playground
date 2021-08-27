import * as React from "react";
import * as Utils from "../utils";

export default function DateCounter3() {
  const [date, setDate] = React.useState(new Date());
  const increment = () => setDate(d => Utils.incrementDate(d));

  return (
    <div>
      <h2>Date Counter v3</h2>
      {/* cover data-testid in 02.test.js */}
      <p data-testid="date-display">{Utils.dateToString(date)}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
