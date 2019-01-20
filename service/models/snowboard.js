const mongoose = require('mongoose')

const snowBoard_schema = new mongoose.Schema({

    id: { type: Number, index: 1, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    ridingStyle: { type: String, required: true },
    imageSource: {type: String, required: true}, 
    recommendedLvl: { type: Number,  min: 1, max: 5, required: true },
    measures: { 
        length: { type: Number, min: 0, max: 170, required: true },
        weight: { type: Number, min: 0, max: 20, required: true },
        width: { type: Number, min: 0, max: 30, required: true }
    }

})


const snowBoards_model = mongoose.model('Snowboards',snowBoard_schema)
module.exports = snowBoards_model
