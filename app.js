const express = require("express");
const app = express();
const cors = require("cors");
//BODY PARSER || READ DATA FROM BODY TO req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cors("*"));
const notificationsController = require("./controller/notifications.controller");
app.post("/getAll", notificationsController.getAll);
app.post("/getOne", notificationsController.getOne);
app.post("/create", notificationsController.create);
app.patch("/update", notificationsController.update);
app.delete("/delete", notificationsController.delete);
module.exports = app;
