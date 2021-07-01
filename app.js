const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

 let clientList = [{src: "images/bicard.png", description: "Bicard Institute Pune"},
                   {src: "images/no-image.png", description: "Makeup By Madhu SK, Dharwad"}, 
                   {src: "images/mehak.jpg", description: "Mehak Spices"}, 
                   {src: "images/kala.png", description: "Kala Creations"}, 
                   {src: "images/abhijit.png", description: "Abhijit Gurram Photography Pune"}] 

app.get("/", function(req, res) {
    res.render("main", {clients: clientList})
})

let port = process.env.PORT;

if(port == null || port == "") {
    port = 3000
}

app.listen(port, function() {
    console.log('Server has started successfully')
})