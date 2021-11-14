const User = require("../models/User");

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createNewUser = async (req, res) => {
  // Here i'm retrieving all the data we send from the frontend.
  const {
    fullName,
    email,
    password,
    address,
    telephoneNumber,
    city,
    zip,
    countrySelection,
    termsAccept,
    marketingAccept,
  } = req.body;
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  try {
    const user = await User.create({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password,
      dateCreated: date,
      address,
      telephoneNumber,
      city,
      country: countrySelection,
      zip,
      termsOptIn: termsAccept,
      marketingOptIn: marketingAccept,
    });
    // We need to return a token here but the code in backend to create isn't complete
    // For now we'll return the user to see if it's worked but this is bad practice.
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error:", error });
  }
};

const checkPassword = async (email, password, callback) => {
  User.findOne({ email: email }).exec(function (error, user) {
    if (error) {
      callback({ error: "error when finding user" });
    } else if (!user) {
      callback({ error: "user not found" });
    } else {
      user.comparePassword(password, function (matchError, isMatch) {
        if (matchError) {
          callback({ error: "error matching" });
        } else if (!isMatch) {
          callback({ error: "bad password" });
        } else {
          callback({ success: "success!" });
        }
      });
    }
  });
};

module.exports = {
  getUserById,
  createNewUser,
  checkPassword,
};
