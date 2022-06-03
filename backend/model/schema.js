import mongoose from "mongoose";
const userDetails = mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    phone : String,
    company : String,
    designation : String,
    dob : String,
    gender : String,
    password : String,
    confirmPassword : String,
    profile :String
})

const users = mongoose.model("userDetails", userDetails)
export default users;