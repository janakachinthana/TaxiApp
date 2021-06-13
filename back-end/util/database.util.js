//imports
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

if (dotenv.error) {
    throw dotenv.error;
}

// initialize database from .env file
const DATABASE = process.env.DATABASE;

//create database client connecton
const client = mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true},

//error handling
    err => {
        if(err){
            console.log(err);
            console.log("not connected to the databse")
            process.exit(-1);
        }
        console.log("Successfully connected to the databse")
    });

//exports    
module.exports = client;