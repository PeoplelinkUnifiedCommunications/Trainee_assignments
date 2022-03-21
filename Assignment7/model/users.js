import mongoose from "mongoose";

const userDetails = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String,
    company: String,
    gender: String,
    designation: String,
    date: String,
    password: String,
    confirmPassword: String,
    image: String
})

const users = mongoose.model("userDetails", userDetails)
export default users