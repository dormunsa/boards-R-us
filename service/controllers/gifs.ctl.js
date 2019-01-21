const GIF = require('../models/GIF')

module.exports = {

    // get all GIFs from db
    async getAllGIFs(req, res) {
        console.log("getAllGIFs()")

        const docs = await GIF.find({})
    
        if(docs) res.json(docs)
        else res.status(404).send("not found")
    },

    // adds a new GIF to db
    async addNewGIF(req, res) {
        console.log("addNewGIF()")

        const newGIF = new GIF(req.body)
        const result = await newGIF.save()

        if(result) res.json(newGIF)
        else res.status(404).send("not found")
    },
    
    // return top 4 GIFs from db
    async getTopGIFs(req, res) {
        console.log("getTopGIFs()")   

        var topGifs = []
        const docs = await GIF.find({})
    
        docs.forEach(GIF => {
            if(topGifs.length < 4) topGifs.push(GIF)
            else for(let el of topGifs) {
                topGifs.sort(function(a, b){return b.rank - a.rank})
                if(GIF.rank > el.rank) {
                    topGifs.pop()
                    topGifs.push(GIF)
                    break;
                }
            }
        });

        topGifs.sort(function(a, b){return b.rank - a.rank})
        if(topGifs) res.json(topGifs)
        else res.status(404).send("not found")
    },

}