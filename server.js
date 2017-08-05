var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get('/reservation',function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"))
} );

//define some routes
app.post('/api/reservation', function(req,res){
//    if (req.body);
    console.log(req.body);
    
});



app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});