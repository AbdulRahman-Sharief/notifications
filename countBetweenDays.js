var moment = require("moment-timezone");

const countByDays = async ({ startDays, daysCount, model, query = {} }) => {
  const cairoTimeZone = "Africa/Cairo";
  let currentDate, endDate, startDate;
  console.log(
    "🚀 ~ file: countBetweenDays.js:7 ~ countByDays ~ startDays:",
    startDays
  );
  if (startDays === 0) {
    currentDate = moment().tz(cairoTimeZone);
    endDate = moment(currentDate).subtract(startDays, "days");
    startDate = moment(endDate).subtract(daysCount, "days").startOf("day");
  } else {
    currentDate = moment().tz(cairoTimeZone).startOf("day").startOf("day");
    endDate = moment(currentDate).subtract(startDays, "days").startOf("day");
    startDate = moment(endDate).subtract(daysCount, "days").startOf("day");
  }

  console.log(endDate.format("YYYY-MM-DD HH:mm:ss"), "قبل  ");
  console.log(startDate.format("YYYY-MM-DD HH:mm:ss"), "بعد او يساوي");
  const q = {
    createdAt: {
      $gte: startDate.toDate(),
      $lt: endDate.toDate(),
    },
    ...query,
  };
  console.log("🚀 ~ file: countBetweenDays.js:22 ~ countByDays ~ q:", q);
  return await model.find(q);
};

module.exports = countByDays;
