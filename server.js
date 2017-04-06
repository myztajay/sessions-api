var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var firebase = require('firebase');//future implementation

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// ROUTES
router
  .get('/sessions', function(req, res){
    res.json({message: 'All active session in a 5 mile radius'});
})
  .post('/sessions', function(req, res){
    console.log(req.body)
})
  .get('/sessions/:id', function(req, res){
    res.json({message: 'One session details'})
})
  .delete('/sessions/:id', function(req, res){
    res.json({message: 'deleted that session'})
})
  .put('/sessions/:id', function(req, res){
    res.json({message: 'edited the session'})
})
