const mongoose = require("mongoose");

const LibraryAdminSchema = new mongoose.Schema({

    adminEmail :{
        type : String,
        require : true
    },
    userType :{
        type : String,
        require : true
    },
    adminPassword :{
        type : String,
        require : true
    }

})

const LibraryAdmin = mongoose.model("LibraryAdmin",LibraryAdminSchema);
module.exports = LibraryAdmin;