var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 4000;

var reservation = [];
var waitlist = [];

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

app.get('/getReservations', function(req, res){
    res.json(reservation);
});

app.get('/api/tables',function(req, res){
    var temp = reservation;
    res.json(temp.slice(0, 5));
} );

app.get('/api/waitlist',function(req, res){
    var temp = reservation;
    if(temp.length > 5) {
        res.json(temp.slice(5));
    } else {
        res.json([]);
    }  
} );

app.post('/reservation', function (req, res) {
    console.log(req.body);
    if (req.body.name) {
        reservation.push(req.body);
        console.log(reservation);
        res.send("success");
    }
    else {
        res.send(req.body);
        console.log("You didn't enter any info");
    };
});

app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});