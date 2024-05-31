var moment = require("moment-timezone");

const countByDays = async ({ startDays, daysCount, model, query = {} }) => {
  const cairoTimeZone = "Africa/Cairo";
  const currentDate = moment().tz(cairoTimeZone).startOf("day");
  const endDate =
    startDays === 0
      ? moment(currentDate)
      : moment(currentDate).subtract(startDays, "days").startOf("day");
  const startDate = moment(endDate).subtract(daysCount, "days").startOf("day");

  console.log(
    "🚀 ~ file: countBetweenDays.js:7 ~ countByDays ~ startDays:",
    startDays
  );
  console.log(endDate.format("YYYY-MM-DD HH:mm:ss"), "قبل");
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
