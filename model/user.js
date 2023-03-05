const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        countryCode: String,
        number: Number
    },
    coutry: {
        type: String
    },
    language : {
        type : String
    },
    verificationCode: {
        otp : Number
    },
    sessionToken : {
        type : String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    accountStatus: {
        type: String,
        default: "PENDING"
    },
    leaf: {
        totalLeaf: {
            type : Number,
            default : 0
        },
        lastMinedLeaf : Number
    },
    lastMiningTime: {
        type: String,
    },
    notifications : [],
    circle : [],
    savedArticles : [],
    likedArticles : []
});
const user = mongoose.model("User", userSchema);
module.exports = user;
