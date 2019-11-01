var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/hotel");
var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");

    var chinesefoodSchema=new mongoose.Schema({
        name:String,
        image:String,
        cost:Number
    });
    var ord=new mongoose.Schema({
        name:String,
    
        cost:Number
    });
    var Chinesef=mongoose.model("Chinese",chinesefoodSchema);
    var Orderf=mongoose.model("Order",ord);
    var Northf=mongoose.model("North",chinesefoodSchema);
    var pizzaf=mongoose.model("Pizza",chinesefoodSchema);
    var mexicanf=mongoose.model("Mexican",chinesefoodSchema);
    var dessertf=mongoose.model("Dessert",chinesefoodSchema);
    var southf=mongoose.model("South",chinesefoodSchema);

    var p1=[{name:"TOMATO",image:"http://www.veryeatalian.com/wp-content/uploads/2015/03/Pizza-Margherita-Thumbnail-veryEATalian.jpg",cost:400},
        {name:"CAPSICUM",image:"https://tse1.mm.bing.net/th?id=OIP.2bSzXAdjhEo50VISW1im9wHaE7&pid=Api&P=0&w=252&h=169",cost:400},
        {name:"CORN",image:"https://3.imimg.com/data3/FF/VR/MY-18318452/images-menu-101-500x500.jpg",cost:400},
        {name:"PANEER",image:"https://c1.staticflickr.com/3/2537/33044385436_7f359d4aa9_z.jpg",cost:450}];
        pizzaf.create(p1);
    var c1=[{name:"HAKKA" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048" ,cost:100} ,
	{name:"MANCHURIAN" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048",cost:100},
	{name:"BURGERS" ,image:"https://media.gettyimages.com/photos/oriental-noodles-salad-with-smoke-salmon-picture-id629412428?s=2048x2048",cost:100}];
	Chinesef.create(c1);
	var v2=[];
	var n1=[{name:"NORMAL THAALI",image:"https://tse4.mm.bing.net/th?id=OIP.i7LgHjjGejq2jXGzWtAhIAHaHa&pid=Api&P=0&w=300&h=300",cost:150},
	{name:"SHAHI THAALI",image:"https://tse4.mm.bing.net/th?id=OIP.O1RtCdRF32Nj8XzvmkGggAHaDt&pid=Api&P=0&w=339&h=170",cost:250},
	{name:"PUNJABI THAALI",image:"https://tse2.mm.bing.net/th?id=OIP.2e21JpPVY5kB28iQxOxN3QHaE9&pid=Api&P=0&w=275&h=185",cost:200}];
    Northf.create(n1);
    var m1=[{name:"TACOS",image:"http://images6.fanpop.com/image/photos/33900000/Tacos-xantona-33932702-3648-2736.jpg",cost:150},
        {name:"QESADILLAS",image:"http://www.dairygoodness.ca/var/ezflow_site/storage/images/dairy-goodness/home/recipes/cheesy-chicken-quesadillas/8182154-18-eng-CA/cheesy-chicken-quesadillas.jpg",cost:150},
        {name:"CHILES QUELLENOS",image:"https://kathleeniscookinginmexico.files.wordpress.com/2010/02/chiles-rellenos-0182.jpg",cost:200 }];
        mexicanf.create(m1);
    var s1=[{name:"MASALA DOSA",image:"https://tse1.mm.bing.net/th?id=OIP.6W3yCkfUBkjKTsBdc44M5gHaEK&pid=Api&P=0&w=333&h=188",cost:150},
        {name:"IDLI VADA",image:"https://tse1.mm.bing.net/th?id=OIP.W8wbox5tir-06WV5l3rVowHaEO&pid=Api&P=0&w=328&h=188",cost:100},
        {name:"SAMBAR RICE",image:"https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/Mixed_Vegetable_Sambar_Rice-5.jpg",cost:150},
     
        {name:"SET DOSA",image:"https://cdn-image.foodandwine.com/sites/default/files/1510583448/paper-dosa-2-south-indian-food-FT-BLOG1117.jpg",cost:150 }];

        southf.create(s1);
    var d1=[{name:"BROWNIE TRIFFLES",image:"https://i.pinimg.com/originals/73/f6/f2/73f6f27c6ca4f1322af3b0de125b641b.jpg",cost:150}
        ,{name:"BRAZILIAN DESSERT",image:"https://tse4.mm.bing.net/th?id=OIP.Y-DAmQJVmb1pE_bv--MUUQHaFW&pid=Api&P=0&w=246&h=178",cost:180}
        ,{name:"DUTCH DESSERT",image:"https://www.labraidfundraising.com/prod/wp-content/uploads/2016/08/dutch-desserts-pumpkin-roll-3.jpg",cost:120}
        ,{name:"BARBIE PINK DESSERT",image:"https://i.pinimg.com/736x/1e/57/ae/1e57ae6df9893ec26d32a4ee782ea8ca--pink-sweets-pink-desserts.jpg",cost:150}];
        dessertf.create(d1);
});
     