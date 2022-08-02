const mongoose = require("mongoose");

const NameSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    area : {
        type : String,
        required : true,
    },
});

const Name = mongoose.model("Name",NameSchema);
module.exports = Name;