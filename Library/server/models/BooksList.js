const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({

    title:{
        type : String,
        require : true
    },
    imageLink:{
        type : String,
        require : true
    },
    author:{
        type : String,
        require : true
    },
    bookId :{
        type : String,
        require : true
    },
    description: {
        type:String,
        require:true
    },
    publication:{
        type:String,
        required:true
    }

})

const BooksList = mongoose.model("BooksList",BooksSchema);
module.exports = BooksList;

