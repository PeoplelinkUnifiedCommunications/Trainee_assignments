const mongoose = require("mongoose");

const messagesListSchema = new mongoose.Schema({
    room:{
        type : String,
        require : true
    },
    author:{
        type : String,
        require : true
    },
    message:{
        type : String,
        require : true
    },
    time:{
        type : String,
        require : true 
    }
})

const MessagesList = mongoose.model("messagesList", messagesListSchema);
module.exports = MessagesList;