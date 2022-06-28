const mongoose = require("mongoose");

const RequestedBooksSchema = new mongoose.Schema({
    id : {
        type : String,
        require : true
    },
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    publication : {
        type : String,
        require : true
    },
    year:{
        type: String,
        required: true
    },
    issuedTo:{
        type: String,
        required: true
    },
    
}) 

const RequestedBooksData = mongoose.model("RequestedBooks",RequestedBooksSchema);
module.exports = RequestedBooksData;