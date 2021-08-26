// date logic
function incrementDate(date) {
  // prev variable because we cannot mutate date state
  const prev = new Date(date.getTime());
  const day = date.getDate();
  return new Date(prev.setDate(day + 1));
}

// date formatter
function dateToString(date) {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

export { incrementDate, dateToString };
