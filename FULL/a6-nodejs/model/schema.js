import mongoose from "mongoose";

const user = mongoose.Schema({
    imgUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    conform: {
        type: String,
        required: true
    }
})

const userDetails = mongoose.model("userDetails", user);

export default userDetails;