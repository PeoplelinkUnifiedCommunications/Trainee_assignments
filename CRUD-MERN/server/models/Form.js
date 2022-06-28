
const mongoose = require("mongoose")

const userDetails = new mongoose.Schema({
  fName : {
      type : String,
      required: true,
  },
  lName : {
      type: String,
      required: true,
  },
});

const Form = mongoose.model("userDetails", userDetails)
module.exports = Form;