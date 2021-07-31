const express=require("express")
const path=require('path')
const app=express();
var port = process.env.PORT || 3000;
 app.use(express.static(path.join(__dirname, "static")));
 app.get("/",function(req,res){
 	res.sendfile("index.html")
 })
 app.get("/class9",function(req,res){
 	res.sendfile("static/class9.html")
 })
 app.get("/blog",function(req,res){
  res.sendfile("static/blog.html")
 })
 app.get("/Class10",function(req,res){
    res.sendfile("static/class10.html")
 })
 app.get("/login",function(req,res){
   res.sendfile("static/login.html")
 })



 app.listen(port,()=>{
  console.log('listening at port 4500')
 })

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});