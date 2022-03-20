import mongoose from "mongoose";

const detailsSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    company: String,
    role: String,
    gender: String,
    dob: String,
    password: String,
    image:String,
    confirm: String,
    imageName:String
})

const UserDetails = mongoose.model("userDetails", detailsSchema)

export default UserDetails;