var express=require("express");
var app=express();

app.set("view engine","ejs");

var request = require('request');

app.get("/",function(req,res){
  res.render("search");
});

app.get("/results",function(req,res){
  var query=req.query.search;
  var url="http://www.omdbapi.com/?s="+query+"&apikey=thewdb";

request(url,function(error,response,body){
  if(!error & response.statusCode==200)
  {
    var data=JSON.parse(body);
    res.render("home",{datas:data});

  }
  else {
    res.send("erroor using api");
  }
});

});
app.listen(3000,function(){
  console.log("server started!!! at 3000");
});
