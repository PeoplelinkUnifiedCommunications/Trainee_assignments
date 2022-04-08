const express = require("express");
const UserInformation = require("./model/schema.js");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await UserInformation.find();
    res.json(users);
  } catch (err) {
    res.send(`error: ${err.message}`);
  }
});

route.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const user = await UserInformation.create({ name });
    res.json(user);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = route;
