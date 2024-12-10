const mongoose = require('mongoose');

uri = "mongodb+srv://blogapi:f8iiejrm@cluster0.ufwbu.mongodb.net/blogapi?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
    mongoose.set("strictQuery", true);
    return mongoose.connect(uri,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
    });
};

module.exports = connectDB;  //export the function to use it in other files