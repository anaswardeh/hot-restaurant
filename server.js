// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Reservations (DATA)
// =============================================================
var reservations = [
    {
        //   routeName: "yoda",
        name: "Kelly",
        phoneNumber: "555-555-5555",
        guestTotal: 2,
        guestEmail: "kelly@gmail.com"
    },
    {
        name: "Kelly2",
        phoneNumber: "555-555-5555",
        guestTotal: 2,
        guestEmail: "kelly2@gmail.com"
    },
    {
        name: "Kelly3",
        phoneNumber: "555-555-5555",
        guestTotal: 2,
        guestEmail: "kelly3@gmail.com"
    },
    {
        name: "Kelly4",
        phoneNumber: "555-555-5555",
        guestTotal: 2,
        guestEmail: "kelly4@gmail.com"
    },
    {
        name: "Kelly5",
        phoneNumber: "555-555-5555",
        guestTotal: 2,
        guestEmail: "kelly5@gmail.com"
    }
];


var waitList = [
    {
        name: "Kelly6",
        phoneNumber: "555-555-5555",
        guestTotal: 2,
        guestEmail: "kelly6@gmail.com"
    }
];

//Directing you to the html pages
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


//View confirmed reservation
app.get("/confirmed", function(req, res){
    res.json(reservations);
});

//View waitlist
app.get("/wait", function(req, res){
    res.json(waitList);
});

//Function to add new reservation
app.post("/new", function(req, res){

    var newReservation = req.body;
    newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    for(i = 0; i < reservations.length; i++){
        if(reservations.length > 5){
            waitList.push(newReservation);
        } 
    }

    res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

  //