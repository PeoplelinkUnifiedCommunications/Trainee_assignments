const mongoose = require("mongoose");

const RequestBookSchema = new mongoose.Schema({

   
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    isbn : {
        type : Number,
        require : true
    },
    publication : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true
    }
})

const RequestBookData = mongoose.model("RequestBookData",RequestBookSchema);
module.exports = RequestBookData;