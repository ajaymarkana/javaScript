const express = require("express");
const app = express();
const session = require('express-session');
const port = process.env.PORT || 8000;

function Connection(){

}

Connection.prototype.initialize = function(){

app.listen(port,() => {

	console.log("server is running");
});

}

module.exports = new Connection();


/*{
    "OrderId" : "TK15",
    "OrderAmount": 1000,
    "Name":"13 pro",
    "Address":"kado dungar",
    "City":"san diago",
    "State":"katch",
    "ZipCode":360003,
    "PhoneNumber":9386411019,
    "Email":"avmmj@gmail.com",
    "TrackingNumber":39987563
    
}*/