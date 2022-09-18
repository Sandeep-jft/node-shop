const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async ()=>{
    if(mongoose.connection.readyState !==1){
        mongoose.connect(MONGO_URI)
        .then(()=>{
            console.log("Connected successfully ");
        })
        .catch(error=>{
            console.error({error});
        })
    }
}

module.exports = connectDB;