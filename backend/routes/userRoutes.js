const express = require('express');
const router = express.Router();

const {
  getUserById, createNewUser
} = require('../controller/userControllers');


//@desc GET a user by email from db
router.get('/:id', getUserById);

module.exports = router;
