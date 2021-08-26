import * as Utils from "../utils";

function setUpTestForToday() {
  const today = new Date();
  const prev = Utils.dateToString(today);
  const next = Utils.dateToString(Utils.incrementDate(today));
  return { today, prev, next };
}

export { setUpTestForToday };
