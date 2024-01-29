const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => { 
    console.log("Vous êtes sur l'acceuil")
    res.sendFile(__dirname + "/data/" + "acceuil.html");
  });

app.get("/logo", (req, res) => { 
    console.log("Vous êtes au logo")
    res.sendFile(__dirname + "/data/" + "logo.html");
  });

app.get("/acceuil", (req, res) => { 
    console.log("Vous êtes sur l'acceuil")
    res.sendFile(__dirname + "/data/" + "acceuil.html");
  });

app.get("/profile", (req, res) => {
    console.log("Vous êtes sur votre profile");
    res.sendFile(__dirname + "/data/" + "profile.html");
  });

app.get("*", (req, res) => {  
    res.send("PAGE NOT FOUND"); 
  }); 

app.listen(port, () => {
    console.log(`Listen on port 3001...`);
});
