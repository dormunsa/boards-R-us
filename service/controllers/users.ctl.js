const mongoose = require('mongoose');
const User = require('../models/user');
const Snowboards = require ('./snowboards.ctl') // access the MODEL


var user_controller_method = {
    
       async getAllusers(req, res){
        console.log("get all countries controller method");
        const result = await User.find({})
        console.log(result);
        if(result){
            res.json(result)
        } else {
            res.status(404).send("data not found")
        }
      },
      async AddUserFromGmail(req, res){
        console.log("Add new User");
        const newUser = new User(req.body);
        console.log(req.body)
        const result = await newUser.save()
        if(result){
            res.json(result)
        } else {
            res.status(404).send("data not found")
        }
       
      },
      async UpdateUser(req, res){
        console.log("Update User User");
        const newUser = new User(req.body);
        console.log(req.body)
        const result = await country.findOneAndUpdate(
            {id: req.params.id}, 
             {number_of_competing: req.params.newNumber}
        )
        const result = await newUser.save()
        if(result){
            res.json(result)
        } else {
            res.status(404).send("data not found")
        }
       
      },
      
      async GetTopFiveBoards(userDetails){
        console.log("inside");
        var doc= Snowboards.getSnowboardByStyles("Freestyle")
        console.log(doc);
       
      },

      async MarkUnlike(req, res){
        console.log("Update User User");
        const newUser = new User(req.body);
        console.log(req.body)
        const result = await country.findOneAndUpdate(
            {$push: { "childrens": employee._id }},
            {number_of_competing: req.params.newNumber}
        )
        const result = await newUser.save()
        if(result){
            res.json(result)
        } else {
            res.status(404).send("data not found")
        }
       
      },


       
}
module.exports = user_controller_method