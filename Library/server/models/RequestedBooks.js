const mongoose = require("mongoose");

const RequestedSchema = new mongoose.Schema({

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
    requestedBy:{
        type:String,
        required:true
    },
    publication:{
        type:String,
        required:true
    }

})

const RequestedList = mongoose.model("RequestedBooks",RequestedSchema);
module.exports = RequestedList;
