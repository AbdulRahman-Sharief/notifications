const Notification = require("../model/notifications.model");
const countBetweenDays = require("../countBetweenDays");
const addToDate = require("../addToDate");
module.exports.getAll = async (req, res, next) => {
  const allNotifications = await countBetweenDays({
    startDays: req.body.startDays,
    daysCount: req.body.daysCount,
    model: Notification,
    query: { deleted: { $ne: true } },
  });
  // console.log(allNotifications);
  res.status(200).json({
    status: "success",
    data: allNotifications,
  });
};

module.exports.getOne = async (req, res, next) => {
  const notification = await Notification.findById(req.body._id);

  res.status(200).json({
    status: "success",
    data: notification,
  });
};

module.exports.create = async (req, res, next) => {
  const notification = await Notification.create({
    text: req.body.text,
  });

  res.status(200).json({
    status: "success",
    message: "created",
    data: notification,
    createdAt: new Date(
      notification.createdAt.setHours(notification.createdAt.getHours() + 3)
    ),
    updatedAt: new Date(
      notification.updatedAt.setHours(notification.updatedAt.getHours() + 3)
    ),
  });
};

module.exports.update = async (req, res, next) => {
  const notification = await Notification.findByIdAndUpdate(
    req.body._id,
    {
      text: req.body.text,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    message: "updated",
    data: notification,
  });
};

module.exports.delete = async (req, res, next) => {
  const notification = await Notification.findByIdAndDelete(req.body._id);

  res.status(200).json({
    status: "success",
    message: "deleted",
  });
};
