const mongoose = require('mongoose')

const GIFs_schema = new mongoose.Schema({
    id: { type: Number, index: 1, required: true },
    userID: { type: Number, required: true },    // Id of the user that upload the specific gif
    fileSource: { type: String, required: true },
    date: { type: Date, required: true },
    rank: { type : Number, required: false},
    weather: { 
        temperature: { type: Number,  max: 150, required: true },
        snowLevel: { type: Number, min: 0, max: 20, required: true },
        wind: { type: Number, min: 0, max: 60, required: true }
    }

})


const GIFs_model = mongoose.model('GIFs',GIFs_schema)
module.exports = GIFs_model