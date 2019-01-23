const express       = require('express')
const userCtl       = require('./controllers/users.ctl')
const gifsCtl       = require('./controllers/gifs.ctl')
const snowboardCtl  = require('./controllers/snowboards.ctl')
// const bodyParser    = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
app.set('port', port)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))


/*** All routes ***/
app.get('/getAllSnowboards'     ,snowboardCtl.getAllSnowboards)
app.get('/getSnowboardByID/:id'     ,snowboardCtl.getSnowboardByID)
app.post('/addNewSnowboard'     ,snowboardCtl.addNewSnowboard)

app.get('/getAllSignedUsers'    ,userCtl.getAllSignedUsers)
app.get('/checkIfUserIsSigned'  ,userCtl.checkIfUserIsSigned)
app.post('/addNewUser'          ,userCtl.addNewUser)
app.put('/updateUserProfile'    ,userCtl.updateUserProfile)
app.put('/markDislikeSnowboard' ,userCtl.markDislikeSnowboard)

app.get('/getAllGIFs'           ,gifsCtl.getAllGIFs)
app.get('/getTopGIFs'           ,gifsCtl.getTopGIFs)
app.post('/addNewGIF'           ,gifsCtl.addNewGIF)

// in case of a wrong route creating a fallback.
app.all('*', (req, res) => { res.send("Wrong route, please try again.") })


app.listen(port, () => console.log(`Listening on port ${port}`))
