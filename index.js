const express=require("express")
const path=require('path')
const app=express();
 app.use(express.static(path.join(__dirname, "static")));
 app.get("/",function(req,res){
 	res.sendfile("index.html")
 })
 app.get("/class9",function(req,res){
 	res.sendfile("static/class9.html")
 })
 app.get("/Class10",function(req,res){
    res.sendfile("static/class10.html")
 })
 app.listen(3000,()=>{
 	console.log('listening at port 4500')
 })