var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/tic-tac-toe", function(req, res){
    res.render("tic");
});

app.get("/rps", function(req, res){
    res.render("rps");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});