var express = require('express');
var app = express();

//SET PORT
app.set('port', 3000);

//SERVER LISTENING
var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('listening on port 3000');
});
