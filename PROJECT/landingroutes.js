var express= require('express');
var app=express();
var bodyParser= require("body-parser");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/hotel");

var path=require("path");
app.use(express.static('public'));
var chinesefoodSchema=new mongoose.Schema({
	name:String,
    image:String,
    cost:Number
});
var ord=new mongoose.Schema({
	name:String,

    cost:Number
});
var users=new mongoose.Schema({
	number:String,
	password:String

});
var Chinesef=mongoose.model("Chinese",chinesefoodSchema);
var Orderf=mongoose.model("Order",ord);
var Northf=mongoose.model("North",chinesefoodSchema);
var userf=mongoose.model("User",users);
var pizzaf=mongoose.model("Pizza",chinesefoodSchema);
    var mexicanf=mongoose.model("Mexican",chinesefoodSchema);
    var dessertf=mongoose.model("Dessert",chinesefoodSchema);
    var southf=mongoose.model("South",chinesefoodSchema);


app.use(bodyParser.urlencoded({extended:true}));
console.log("welcome");

	//var c1=[{name:"HAKKA" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048" ,cost:100} ,
	//{name:"MANCHURIAN" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048",cost:100},
	//{name:"BURGERS" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048",cost:100}];
	//Chinesef.create(c1);
	var v2=[];
	var loggedin=false;
	//var n1=[{name:"NORMAL THAALI",image:"https://tse4.mm.bing.net/th?id=OIP.i7LgHjjGejq2jXGzWtAhIAHaHa&pid=Api&P=0&w=300&h=300",cost:150},
	//{name:"SHAHI THAALI",image:"https://tse4.mm.bing.net/th?id=OIP.O1RtCdRF32Nj8XzvmkGggAHaDt&pid=Api&P=0&w=339&h=170",cost:250},
	//{name:"PUNJABI THAALI",image:"https://tse2.mm.bing.net/th?id=OIP.2e21JpPVY5kB28iQxOxN3QHaE9&pid=Api&P=0&w=275&h=185",cost:200}];
	//Northf.create(n1);
	var totalpay=0;
	var userdetails=[];
	var listitems=[];
	var preparingitems=[];
	var ordernumber=0;
	var newO={name:"",ONO:""};
	
app.get('/form',(req,res)=>
{
	res.sendFile(
		path.join(__dirname+"/loginform2.html"));
});	
app.post("/formsubmit",(req,res)=>{
	var mob=req.body.mobile;
	var pass=req.body.password;
	var newUser={number:mob,password:pass};
	userf.create(newUser,function(err,newly){
		if(err)
			console.log(err);
		else
		{
			userdetails.push(newly);
			loggedin=true;
			res.redirect("/");
		}		
		});


});
app.get('/',(req,res)=>{
	if(loggedin==true)
	res.sendFile(
		 path.join(__dirname+"/rest.html"));
		 else
		 {
			 res.redirect("/form");
		 }
});
app.get("/chinese",(req,res)=>{
    console.log("chinese hit");
	 Chinesef.find({},function(err,china){
	 	if(err)
	 		console.log(err);
		 else
			res.render("chinesefood.ejs",{campgrounds:china});
	});
});
	 
  
 app.get("/north",(req,res)=>{
    console.log("north hit");
	 Northf.find({},function(err,north){
	 	if(err)
	 		console.log(err);
		 else
			res.render("northindian.ejs",{campgrounds:north});
	});
 });

	app.get("/desserts",(req,res)=>{
		console.log("dessert hit");
		 dessertf.find({},function(err,dessert){
			 if(err)
				 console.log(err);
			 else
				res.render("desserts.ejs",{campgrounds:dessert});
		});
	});

		app.get("/pizzas",(req,res)=>{
			console.log("pizzas hit");
			 pizzaf.find({},function(err,pizzas){
				 if(err)
					 console.log(err);
				 else
					res.render("pizzas.ejs",{campgrounds:pizzas});
			});
		});
			app.get("/mexican",(req,res)=>{
				console.log("mexican hit");
				 mexicanf.find({},function(err,mexican){
					 if(err)
						 console.log(err);
					 else
						res.render("mexican.ejs",{campgrounds:mexican});
				});
			});
				app.get("/south",(req,res)=>{
					console.log("south hit");
					 southf.find({},function(err,south){
						 if(err)
							 console.log(err);
						 else
							res.render("southindian.ejs",{campgrounds:south});
					});
				});












	 
 
 app.post("/addorder",(req,res)=>{
	 console.log("order hit");
		var nm= req.body.name;
		var im=req.body.cost;
		totalpay=totalpay+parseInt(im);
		var newOrder={name:nm,cost:im};
		ordernumber++;
		 newO={name:nm,ONO:ordernumber};
		Orderf.create(newOrder,function(err,newly){
			if(err)
				console.log(err);
			else
			{
				v2.push(newly);
				listitems.push(newO);
				res.render("orderdetails.ejs",{orderdetails:v2,tp:totalpay});
			}		
			});
		});
		app.get("/logout",(req,res)=>{
			v2=[];
			totalpay=0;
			listitems=[];
			preparingitems=[];
			loggedin=false;
		res.redirect('/form');	
	});
	app.get("/orderlist",(req,res)=>{
		res.render("chefsideorderlist.ejs",{orders:listitems});

	});
	app.post("/preparinglist",(req,res)=>{
		
		var nop=req.body.orderno;
		var namep=req.body.ordername;
		var i=0;
		while(i<listitems.length)
		{
			if(listitems[i].ONO==nop)
			{

			listitems.splice(i,1);
			break;
			}
			i++;
		}
		preparingitems.push({nop,namep});
		res.render("chefsidepreparinglist.ejs",{preparing:preparingitems});
	});
	
// app.post("/chinese",(req,res)=>{
// 	var nm= req.body.name;
// 	var im=req.body.image;
// 	var newCampground={name:nm,image:im};
// 	Campground.create(newCampground,function(err,newly){
// 		if(err)
// 			console.log(err);
// 		else
// 			res.redirect("/campgrounds");		
// 		});
	
	
// });
// app.get("/campgrounds/new",(req,res)=>{
//     res.render("new.ejs");
// });
// app.get('/repeat/:message/:num',(req,res)=>{

// 	var i=0;
// 	while(i<req.params.num)
// 	res.send(req.params.message);
// });
app.listen(3000,()=>{
	console.log('server listening on port 3000 for yelpcamp project');
});
				
