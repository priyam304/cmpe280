var express = require("express");
var app = express();



var fs = require("fs");
var contents = fs.readFileSync("location.json");

var jsonContent = JSON.parse(contents);

app.get("/location", (req, res, next) => {

 res.json(jsonContent);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});