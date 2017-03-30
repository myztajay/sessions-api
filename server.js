var express = require('express');
var app = express();


// MIDDLEWARE
var bodyParser = require('body-parser');

//SET PORT
app.set('port', 3000);
// ROUTER
var router = express.Router();

//SERVER LISTENING
var server = app.listen(app.get('port'), function(){
var port = server.address().port;
console.log('listening on port 3000');
});

//ROUTE PREFIX
app.use('/api', router);


router.get('/', function(req, res){
  res.json({message: "We did it"});
});
