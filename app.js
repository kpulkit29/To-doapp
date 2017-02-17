var express=require("express");
var todoc=require("./controllers/appcontrol");
var app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
todoc(app);
//listen to port
app.listen(3000);
console.log("Server running...");