const express = require("express");

const app = express();
const port= 8000;

app.get("/",(req,res)=>{
    res.send("this is homepage of my first express app with ajay");
});

app.get("/about",(req,res)=>{
    res.send("this is about page of my first express app with ajay");
});


app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});

