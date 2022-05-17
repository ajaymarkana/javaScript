const express = require("express");
const Order = require("../models/schema");
const {User} = require("../models");
const bcrypt = require('bcryptjs');
const { json } = require("express");
const jwt = require("jsonwebtoken")

const controller = {};

controller.post =async (req,res)=>{
        
	console.log(req.body);
	const user = await new Order(req.body);
	
	user.save().then(() =>{
		res.status(201).send("Data Created Successfully");
	}).catch((error) =>{
		res.status(400).send(error);
		console.log(error)
	})
}

controller.get = async(req,res)=>{
	try{
		console.log("query : ",req.query);

		const order = await Order.find();
		console.log("Data ::::::::::::::::::=>",order);
		const response = {
			data :order,
			recordsFiltered: order.length,
        	recordsTotal: order.length
		}
		console.log("data : ",order);
		
		res.send(response);
	}
	catch(error) {
		res.status(400).send(error);
	}
    
}


controller.put = async(req,res)=>{
	try{

        console.log(req.body);
       
        const data =await  Order.findOneAndUpdate({"OrderId": req.body.OrderId}, {$set:{"Name":req.body.Name}});
        console.log("data : ",data);

        if(!data){
        	console.log(data);
        	return res.status(404).send("Error");
        }
        else{
        	return res.status(200).send("Data Updated Successfully.");
        }

   	}
	catch(error) {
        console.log(error);
		return res.status(500).send(error);
	}
}

controller.delete = async(req,res)=>{
	try{

		console.log(req.body.Name);
       
        const data = await Order.findOneAndDelete({Name: req.body.Name });
        console.log(data);

        if(!data){
        	console.log("data not found");
        	return res.status(404).send("Error");
        }
        else{
        	return res.status(200).send("Data Deleted Successfully");
        }
        
       	}
	catch(error) {
        console.log(error);
		res.status(500).send(error);
	}
}


module.exports = {controller};
