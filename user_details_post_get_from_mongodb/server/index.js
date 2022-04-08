const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./user.js");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors());
app.use("/users", route);

const CONNECTION_URL =
  "mongodb+srv://chinnababu:babu100@cluster0.mrppy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
