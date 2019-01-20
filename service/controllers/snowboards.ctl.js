const Snowboard = require('../models/snowboard'); 

exports.getAllSnowboards = (req, res) => {
    Snowboard.find({})
        .then(docs => {
            console.log("getAllSnowboards()")
            console.log(docs)
            return res.json(docs)
        })
        .catch(err => console.log(`query error: ${err}`))
}

exports.getSnowboardByStyle = (req, res) => {
    userStyle = req.body.userStyle
    Snowboard.find({ridingStyle: userStyle})
        .then(docs => {
            console.log("getSnowboardByStyle()")
            console.log(docs)
            return res.json(docs)
        })
        .catch(err => console.log(`query error: ${err}`))
}

