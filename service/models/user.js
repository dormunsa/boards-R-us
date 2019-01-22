const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({

    id: { type: Number, index: 1, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    isSigned:{type: Boolean, required:true},
    level: { type: Number, min: 1, max: 5, required: false },
    dislikeList: { type: [Number], required: false }, // array of snowboards id's that the user mark as dislike
    topPicks: { type: [Number], required: false }, // array of top five snowboards id's that the system fit to the user
    ridingStyle: {type: String, required: false },
    bodyMeasures: { 
        weight: { type: Number, min: 30, max: 150, required: false },
        height: { type: Number, min: 30, max: 220, required: false },
        shoeSize: { type: Number, min: 30, max: 60, required: false }
    }

})

const users_model = mongoose.model('users',user_schema)
module.exports = users_model