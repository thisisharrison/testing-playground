import * as React from "react";
import * as Utils from "../utils";

function App() {
  const [date, setDate] = React.useState(new Date());
  const increment = () => setDate(d => Utils.incrementDate(d));

  return (
    <div>
      <h2>Date Counter v4</h2>
      <DateCounter date={date} increment={increment} />
    </div>
  );
}

const DateCounter = ({date, increment}) => {
  return (
    <>
      <p data-testid="date-display">{Utils.dateToString(date)}</p>
      <button onClick={increment}>+1</button>
    </>
  );
};

export {App as DateCounter4, DateCounter};
