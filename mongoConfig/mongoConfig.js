const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = 'mongodb://127.0.0.1:27017/demoDB';
mongoose.set("strictQuery", false);
class MongoDB {
    constructor() {
        if (!MongoDB.instance) {
            const result =  mongoose.connect(
                MONGO_URI
            );

            console.log('RESSULT ::::: ', result);
        }
    }
}

const mongoDB = new MongoDB();
Object.freeze(mongoDB);
module.exports = { mongoDB };