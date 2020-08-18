var express  = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose   = require('mongoose'),


var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.render("index");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/travels", function(req,res){
    res.render("travels");
});

app.get("/guides", function(req,res){
    res.render("guides");
});

app.get("/services", function(req,res){
    res.render("services");
});


app.listen(port, (err) => {
    if(err){
        console.log('error has occured')
    }
    else{
        console.log('Server has started on port ' + port)
    }
})