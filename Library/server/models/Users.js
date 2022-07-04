const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({

    Name:{
        type : String,
        require : true
    },
    userType:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    password :{
        type : String,
        require : true
    },
    year : {
        type:String,
        require:true
    }

})

const Users = mongoose.model("UsersList",UsersSchema);
module.exports = Users;

