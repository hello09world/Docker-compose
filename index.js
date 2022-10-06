const mongoose = require("mongoose");
const express = require("express");

const app = express();
const DATABASE= "mongodb://mymongo:27017/demo";

mongoose.connect(DATABASE)    
    .then(() => {        
        console.log("DB Connected");    
    })    
    .catch(() => {        
        console.log("DB not Connected");    
    });

app.get("/", (req, res) => {
    res.json({
        message : "YOU DONE!!"
    });
});

app.listen(8000, () => {
    console.log("App is running");
});