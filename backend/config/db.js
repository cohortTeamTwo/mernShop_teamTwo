require('dotenv').config();

//const uri = "mongodb+srv://user-123:4981@cluster0.shrov.mongodb.net/shop?retryWrites=true&w=majority";

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });

        console.log("MongoDB Connection Success");
    }   catch(error) {
        console.error("MongoDB connection FAIL");
        console.log(error)
        process.exit(1);
    }
};

module.exports = connectDB;