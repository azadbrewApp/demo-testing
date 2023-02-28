const mongoose = require("mongoose");
const MONGO_URI = 'mongodb://localhost:27017/demoDB';
mongoose.set("strictQuery", false);
class MongoDB {
    constructor() {
        if (!MongoDB.instance) {
            mongoose.connect(
                MONGO_URI,
                (err) => {
                    if (err) {
                        console.log(`Connection Failed with MongoDB`);
                        console.log(`${err}`);
                    } else {
                        console.log(`Connected to MongoDB`);
                        console.log(`${MONGO_URI}`);
                    }
                }
            );
        }
    }
}

const mongoDB = new MongoDB();
Object.freeze(mongoDB);
module.exports = { mongoDB };