const express = require('express');
// const ideaCtl = require('./controllers/idea.ctl');
const app = express();
const userCtl= require('./controllers/users.ctl')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('port',port);
// app.use('/', express.static('./public')); // for API
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.set("Content-Type", "application/json");
//     next();
//  });

/*** All routes ***/
// app.get('/getAllUsers', userCtl.getAllusers);
// app.post('/addnewuser', userCtl.AddUserFromGmail);
//app.get('/final-ideas/updateIdea', ideaCtl.updateData);
//app.get('/final-ideas/deleteIdea', ideaCtl.deleteData);

app.listen(port, () => console.log(`listening on port ${port}`));