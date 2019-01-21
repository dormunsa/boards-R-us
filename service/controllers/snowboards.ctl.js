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


newuser ={
      getSnowboardByStyles(userdetails) {
          var docs
         function getData(userdetails){
            result =  Snowboard.find({ridingStyle: userdetails}).exec()
            return result;
          }
         var promise = getData(userdetails);
    
         promise.then( (jedis)=> {
            docs=jedis;
            console.log(jedis);
            return docs
         }).error((error)=>{
            console.log(error);
         });
       return docs 
     }

     
}
module.exports = newuser

