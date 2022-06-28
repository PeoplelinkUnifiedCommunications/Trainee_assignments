const mongoose = require("mongoose");

const IssuedBooksSchema = new mongoose.Schema({
    BookId : {
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

const IssuedBooksData = mongoose.model("IssuedBooks",IssuedBooksSchema);
module.exports =IssuedBooksData;