const mongoose = require("mongoose");

const chatUsersSchema = new mongoose.Schema({
    Email:{
        type : String,
        require : true
    }
})

const ChatUsers = mongoose.model("chatUsers",chatUsersSchema);
module.exports = ChatUsers;

