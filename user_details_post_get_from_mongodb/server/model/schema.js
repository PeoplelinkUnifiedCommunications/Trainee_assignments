const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    name: String
})

const UserInformation = mongoose.model("userInfo", usersSchema)

module.exports = UserInformation;