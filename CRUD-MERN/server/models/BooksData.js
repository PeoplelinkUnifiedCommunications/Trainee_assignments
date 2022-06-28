const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({

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
}) 

const BooksData = mongoose.model("BooksData",BooksSchema);
module.exports = BooksData;