const GIF = require('../models/GIF')
var request = require('request');
var secretKey = "5fbe7c0c33c0e6319388037deb1a933b"
var gifCount = 7
module.exports = {

    // get all GIFs from db
    async getAllGIFs(req, res) {
        console.log("getAllGIFs()")

        const docs = await GIF.find({})

        if (docs) res.json(docs)
        else res.status(404).send("not found")
    },

    // adds a new GIF to db
    async addNewGIF(req, res) {
        console.log("addNewGIF()")

        var date = req.body.date
        var rank = 0;
        var fileSource = req.body.fileSource
        var userId = req.body.userID

        console.log(date)
        var unixDate = parseInt((new Date(date).getTime() / 1000))
        console.log(unixDate)
        request(`https://api.darksky.net/forecast/${secretKey}/45.8974,7.6274,${unixDate}`, async (error, response, body) => {
            if (error) {
                console.log('error:', error); // Print the error if one occurred
                res.status(404).send("not found")
            }
            if (body) {

                var weather = JSON.parse(body);

                var icon = weather.currently.icon;
                var temperature = weather.currently.temperature
                temperature = (temperature - 32) * (5 / 9);
                var windSpeed = weather.currently.windSpeed
                windSpeed = windSpeed * 1.6
                console.log(icon)
                console.log(temperature)
                console.log(windSpeed)
                if( icon == "snow" ){
                    rank += 3
                }
                else if ( icon == "rain" ){
                    rank += 2
                } 
                else if ( icon == "wind" ){
                    rank += 1
                } 

                if( 0 < temperature && temperature < 5){
                    rank += 1
                }

                else if ( -10 < temperature && temperature < 0 ){
                    rank += 2
                }

                else if ( temperature < -10){
                    rank += 3
                }

                if( 0 < windSpeed && windSpeed < 20){
                    rank += 1
                }
                else if( 20 < windSpeed && windSpeed < 30){
                    rank += 2
                }
                else if( 30 < windSpeed ){
                    rank += 3
                }
                gifCount +=  1
                var Gif = {
                    "id": gifCount,
                    "userID": userId,    // Id of the user that upload the specific gif
                    "fileSource": fileSource,
                    "date": date,
                    "rank": rank,
                    "weather": {
                        "temperature": temperature,
                        "icon": icon,
                        "windSpeed": windSpeed
                    }
                }
            }
            
            const newGIF = new GIF(Gif)
            const result = await newGIF.save()
            if (result) res.json(newGIF)
            else res.status(404).send("not found")
        });


    },

    // return top 4 GIFs from db
    async getTopGIFs(req, res) {
        console.log("getTopGIFs()")

        var topGifs = []
        const docs = await GIF.find({})

        docs.forEach(GIF => {
            if (topGifs.length < 4) topGifs.push(GIF)
            else for (let el of topGifs) {
                topGifs.sort(function (a, b) { return b.rank - a.rank })
                if (GIF.rank > el.rank) {
                    topGifs.pop()
                    topGifs.push(GIF)
                    break;
                }
            }
        });

        topGifs.sort(function (a, b) { return b.rank - a.rank })
        console.log(topGifs)
        if (topGifs) res.json(topGifs)
        else res.status(404).send("not found")
    },

}