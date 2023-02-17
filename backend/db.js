const mongoose = require('mongoose');

Mongo_URI = "mongodb://localhost:27017/Notes";

mongoose.set('strictQuery', false);
const connectToMongo = () =>{
    mongoose.connect(Mongo_URI, () => {
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;