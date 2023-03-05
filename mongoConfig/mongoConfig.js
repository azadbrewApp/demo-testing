const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = 'mongodb://127.0.0.1:27017/demoDB';
mongoose.set("strictQuery", false);
class MongoDB {
    constructor() {
        if (!MongoDB.instance) {
            mongoose.connect(
                MONGO_URI
            );
        }
    }
}

const mongoDB = new MongoDB();
Object.freeze(mongoDB);
module.exports = { mongoDB };