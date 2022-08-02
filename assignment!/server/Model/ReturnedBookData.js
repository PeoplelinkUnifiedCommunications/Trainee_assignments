const mongoose = require("mongoose");

const ReturnBooksDataSchema = new mongoose.Schema({

   
    isbn : {
        type : Number,
        require : true
    },
    username : {
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
    issueDate :{
        type : String,
        require : true
    },
    returnDate : {
        type : String,
        require : true
    },
    returnStatus :{
        type : String,
        require : true
    },
    issued : {
        type : String,
        require : true
    
    },
    returnedON :{
        type : String,
        require:true
    }
})

const ReturnBooksData = mongoose.model("ReturnBooksData",ReturnBooksDataSchema);

module.exports = ReturnBooksData;