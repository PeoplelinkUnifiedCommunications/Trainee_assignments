const mongoose = require('mongoose')
const userDetails = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    gender: String,
    dob: String,
    company: String,
    role: String,
    password: String,
    confirmPassword: String,
    url: String
})

const users = mongoose.model("userDetails", userDetails) 

module.exports = users