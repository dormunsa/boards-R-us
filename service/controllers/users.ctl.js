const mongoose = require('mongoose');
const User = require('../models/user');
const snowboardCtl = require('./snowboards.ctl')
var requestify = require('requestify');
var request = require('request');
var snowboardsByStyle
var devApi = "http://localhost:3000"
var productionapi = "heroku..."
var userCount = 17
// var user_controller_method = {

//    async getAllusers(req, res) {
//     console.log("get all countries controller method");
//     const result = await User.find({})
//     console.log(result);
//     if(result){
//         res.json(result)
//     } else {
//         res.status(404).send("data not found")
//     }
//   },
//       async AddUserFromGmail(req, res){
//         console.log("Add new User");
//         const newUser = new User(req.body);
//         console.log(req.body)
//         const result = await newUser.save()
//         if(result){
//             res.json(result)
//         } else {
//             res.status(404).send("data not found")
//         }

//       },
//       async UpdateUser(req, res){
//         console.log("Update User User");
//         const newUser = new User(req.body);
//         console.log(req.body)
//         // const result = await country.findOneAndUpdate(
//         //     {id: req.params.id}, 
//         //      {number_of_competing: req.params.newNumber}
//         // )
//         if(result){
//             res.json(result)
//         } else {
//             res.status(404).send("data not found")
//         }

//       },

//       async GetTopFiveBoards(userDetails){
//         console.log("inside");
//         var doc= snowboardCtl.getSnowboardByStyles("Freestyle")
//         console.log(doc);

//       },

// }

// module.exports = user_controller_method

module.exports = {

    // get all the signed users from db
    async getAllSignedUsers(req, res) {
        console.log("getAllUsers()")

        const result = await User.find({})

        if (result) res.json(result)
        else res.status(404).send("not found")
    },

    // checks if a specific user is already signed to our system, if yes then return his details.
    async checkIfUserIsSigned(req, res) {
        console.log("checkIfUserIsSigned()")

        const ID = req.body.id
        const result = await User.find({ id: ID })

        if (result) res.json(result)
        else res.status(404).send("not found")
    },

    // adds a new user to db after gmail authentication
    async addNewUser(req, res) {
        console.log("addNewUser()")

        const newUser = new User(req.body)
        newUser.id = userCount + 1;
        newUser.isSigned = true;
        console.log(newUser)
        const result = await newUser.save()

        if (result) res.json(newUser)
        else res.status(404).send("not found")
    },


    // async updateUserProfile(req, res) {

    //     console.log("updateUserProfile()")
    //     const ID = req.body.id
    //     const newLevel = req.body.level
    //     const newRidingStyle = req.body.ridingStyle
    //     const newWeight = req.body.weight
    //     const newHeight = req.body.height
    //     const newShoeSize = req.body.shoeSize

    //     const result = await User.updateOne(
    //         {id: ID}, 
    //         {
    //             $set: {
    //                 level: newLevel,
    //                 ridingStyle: newRidingStyle,
    //                 bodyMeasures: {
    //                     weight: newWeight,
    //                     height: newHeight,
    //                     shoeSize: newShoeSize
    //                 }

    //             }
    //         }
    //     )

    //     const updatedUser = await User.findOne({id: ID})

    //     if(result) res.json(updatedUser)
    //     else res.status(404).send("not found")
    // },

    // get user's top 5 matching boards from db
    // async GetTopFiveBoards(req, res) {
    //     console.log("GetTopFiveBoards()")

    //     var doc = snowboardCtl.getSnowboardByStyles("Freestyle")
    //     if(doc) res.json(doc)
    //     else res.status(404).send("not found")
    //   },


    // update the profile details of an existing user in db
    async updateUserProfile(req, res) {

        console.log("getByStyle()")
        var ID = req.body.id
        var newName = req.body.name
        var newLevel = req.body.level
        var newAddress = req.body.address
        var newRidingStyle = req.body.ridingStyle
        var newWeight = req.body.weight
        var newHeight = req.body.height
        var newShoeSize = req.body.shoeSize
        var newDislikeList = req.body.dislikeList
        console.log(newDislikeList)
        var topPicks = [];
        console.log(newRidingStyle)
        request(`${devApi}/getStyle/${newRidingStyle}`, async (error, response, body) => {
            if (error) {
                console.log('error:', error); // Print the error if one occurred
                res.status(404).send("not found")
            }
            if (body) {

                snowboardsByStyle = body
                console.log(snowboardsByStyle)
                var myObject = JSON.parse(snowboardsByStyle);
                console.log(myObject)

                for (var i = 0; i < myObject.length; i++) {
                    if (newDislikeList.length > 0) {
                        for (var j = 0; j < newDislikeList.length; j++) {

                            if (myObject[i].id != newDislikeList[j]) {

                                topPicks.push(myObject[i])
                            }

                        }

                    } else {

                        topPicks.push(myObject[i])

                    }
                }


                console.log(topPicks)
                const result = await User.updateOne(
                    { id: ID },
                    {
                        $set: {
                            name: newName,
                            level: newLevel,
                            ridingStyle: newRidingStyle,
                            topPicks: topPicks,
                            hasProfile: true,
                            address: newAddress,
                            bodyMeasures: {
                                weight: newWeight,
                                height: newHeight,
                                shoeSize: newShoeSize
                            }


                        }
                    }
                )

                const updatedUser = await User.findOne({ id: ID })

                if (result) {

                    res.json(updatedUser)
                }
                else res.status(404).send("not found")


            }
        });


    },

    async markUnlikeSnowboard(req, res) {

        console.log("markUnlikeSnowboard()")
        var ID = req.body.id
        var newRidingStyle = req.body.ridingStyle

        var topPicks = [];
        request(`${devApi}/getStyle/${newRidingStyle}`, async (error, response, body) => {
            if (error) {
                console.log('error:', error); // Print the error if one occurred
                res.status(404).send("not found")
            }
            if (body) {

                snowboardsByStyle = body
                console.log(snowboardsByStyle)

                var myObject = JSON.parse(snowboardsByStyle);
                console.log(myObject)
                for (var i = 0; i < myObject.length; i++) {
                    console.log(myObject[i])

                    if (myObject[i].id != ID) {

                        topPicks.push(myObject[i])

                    }

                }
                console.log(topPicks)
                const result = await User.updateOne(
                    { id: ID },
                    {
                        $set: {
                            topPicks: topPicks,
                        },

                        $push: { dislikeList: ID }

                    }
                )

                const updatedUser = await User.findOne({ id: ID })

                if (result) {

                    res.json(updatedUser)
                }
                else res.status(404).send("not found")


            }
        });

    },



}
