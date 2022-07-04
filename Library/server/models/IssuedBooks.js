const mongoose = require("mongoose");

const IssuedSchema = new mongoose.Schema({

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
    issuedTo:{
        type:String,
        required:true
    },
    publication:{
        type:String,
        required:true
    }

})

const IssuedBooks = mongoose.model("IssuedBooks", IssuedSchema);
module.exports = IssuedBooks;