const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema({

    username:{
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

const Library = mongoose.model("LiLibrarybrary",LibrarySchema);
module.exports = Library;

