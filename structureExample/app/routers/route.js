const express = require("express");
const app = express();
const {router} = require("./auth/");
const {router} = require("./user/");
const session = require('express-session');

app.use("/user",router);

app.use("/auth",router);

module.exports = {app};
