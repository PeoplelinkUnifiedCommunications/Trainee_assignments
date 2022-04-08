const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }

})

const newUserDetails = mongoose.model("newUserDetails", userSchema);
module.exports = newUserDetails;