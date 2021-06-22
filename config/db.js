const mongoose = require('mongoose');
require('dotenv').config();

const uri = 'mongodb+srv://vicky:1234@cluster0.3ijil.mongodb.net/dailytasks?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
 
    console.log(`MongoDB connected ...`);
};

module.exports = connectDB;