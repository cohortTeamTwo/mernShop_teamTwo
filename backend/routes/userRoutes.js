const express = require("express");
const router = express.Router();

// ok looks like someone had started the userRoutes I missed this!
const { getUserById, createNewUser } = require("../controller/userControllers");

// now for the route in the API after auth we said /signUp so this is telling the backend which controller to use
router.route("/signUp").post(createNewUser);
//@desc GET a user by email from db
router.get("/:id", getUserById);

module.exports = router;
