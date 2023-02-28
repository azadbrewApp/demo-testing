const mongoose = require("mongoose");
const MONGO_URI = 'mongodb://127.0.0.1:27017/demoDB';
mongoose.set("strictQuery", false);
class MongoDB {
    constructor() {
        if (!MongoDB.instance) {
            mongoose.connect(
                'mongodb://localhost:27017/demoDB',
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