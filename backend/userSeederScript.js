require('dotenv').config()

const userData = require('./data/users');
const connectDB = require('./config/db');
const User = require('./models/User');
const { checkPassword, getUserByEmail } = require('./controller/userControllers');

connectDB();

const importData = async () => {
  try {
    await User.deleteMany({});
    for (let i = 0; i < userData.length; i++){
      await User.create(userData[i])
    }
    console.log("User Import Success");
    process.exit()
  } catch(error) {
    console.error("Error with data import!");
    console.log(error)
    process.exit(1)
  }
}

importData()

