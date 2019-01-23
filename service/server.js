const express = require('express');
// const ideaCtl = require('./controllers/idea.ctl');
const snowboardCtl = require('./controllers/snowboards.ctl')
const app = express();
const userCtl= require('./controllers/users.ctl')
const gifsCtl= require('./controllers/gifs.ctl')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());

app.set('port',port);
// app.use('/', express.static('./public')); // for API
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.set("Content-Type", "application/json");
//     next();
//  });


/*** All routes ***/
app.get('/getAllSignedUsers', userCtl.getAllSignedUsers);
app.get('/checkIfUserIsSigned', userCtl.checkIfUserIsSigned)
app.get('/getStyle/:ridingStyle', snowboardCtl.getSnowboardByStyles)
app.put('/updateUserProfile', userCtl.updateUserProfile)
app.post('/addNewUser', userCtl.addNewUser);
app.put('/markUnlikeSnowboard',userCtl.markUnlikeSnowboard)
// app.put('/updateUserProfile', userCtl.updateUserProfile);
// app.get('/getSnowboardByStyles/:RidingStyle', snowboardCtl.getSnowboardByStyles);
// app.get('/GetTopFiveBoards', userCtl.GetTopFiveBoards);
app.get('/getTopGIFs', gifsCtl.getTopGIFs);
app.post('/addNewGIF', gifsCtl.addNewGIF);
app.all('*', (req, res, next) => {                                     // in case of a wrong route creating a fallback.
    res.send("Wrong route, please try again.")
})


app.listen(port, () => console.log(`Listening on port ${port}`));