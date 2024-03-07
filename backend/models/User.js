const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    profileImage: {
        data: String,
        contentType: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    }

})

const User = mongoose.model("User", userSchema)
module.exports = User;