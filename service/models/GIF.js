const mongoose = require('mongoose')

const GIFs_schema = new mongoose.Schema({
    id: { type: Number, index: 1, required: true },
    userID: { type: Number, required: true },    // Id of the user that upload the specific gif
    fileSource: { type: String, required: true },
    date: { type: Date, required: true },
    rank: { type : Number, required: false},
    weather: { 
        temperature: { type: Number,  max: 150, required: true },
        icon: { type: String, required: true },
        windSpeed: { type: Number, min: 0, max: 60, required: true }
    }

})


const GIFs_model = mongoose.model('gifs',GIFs_schema)
module.exports = GIFs_model