var express= require('express');
var app=express();
var bodyParser= require("body-parser");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/hotel");


var chinesefoodSchema=new mongoose.Schema({
	name:String,
    image:String,
    cost:Number
});
var Chinesef=mongoose.model("Chinese",chinesefoodSchema);




app.use(bodyParser.urlencoded({extended:true}));
console.log("welcome");

	var c1=[{name:"HAKKA" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048" ,cost:100} ,
	{name:"MANCHURIAN" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048",cost:100},
	{name:"BURGERS" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048",cost:100}];
	Chinesef.create(c1);