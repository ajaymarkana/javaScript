const express = require("express");
const router = express.Router();
const Order = require("../models/index");
const {controller} = require("../routers/user/index");
const {auth} = require("./lib/middleware");


router.get("/",controller.get);

router.post("/",auth,controller.post);

router.put("/update",auth,controller.put);

router.delete("/delete",auth,controller.delete);



module.exports = router;
