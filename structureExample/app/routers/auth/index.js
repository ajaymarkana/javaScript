const express = require("express");
const router = express.Router();
//const Order = require("../models/index");
const {validator} = require("./lib/validator");
const {userControllers} = require("./lib/controller");
//const {auth} = require("../lib/middleware");


router.post("/SignIn", userControllers.signIn);

router.post("/SignUp",userControllers.signUp);

router.post("/validateEmail",validator.validateEmail);


module.exports = {router};
