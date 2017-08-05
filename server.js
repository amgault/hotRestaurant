var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//define some routes
add.post('/add', function(req,res){
    if (req.body);
    
});



app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});