const mongoose = require("mongoose");

const IssueBookSchema = new mongoose.Schema({

   
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
    
    }
})

const IssueBookData = mongoose.model("IssueBookData",IssueBookSchema);

module.exports = IssueBookData;