const mongoose = require("mongoose");

const friendsListSchema = mongoose.Schema({

    roomId:{
        type : String,
        require : true
    },
    people:{
        type : Array,
    },
})

const Friends = mongoose.model("FriendsList", friendsListSchema)
module.exports = Friends;








