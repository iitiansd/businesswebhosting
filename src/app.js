const express = require("express");
const path = require("path");
require("./datas/conn");
const User = require("./models/usermessage");

//to use partial of templates
const hbs = require("hbs");



const { registerPartials } = require("hbs");
const app = express();

const port = process.env.PORT || 9000;
//to use public folder
const staticpath = path.join(__dirname,"../public");
//to use templates view folder or get path
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");
//to include bootstrap
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));
//middleware
app.use(express.static(staticpath));

//to tell express application that iam using view engine hbs so,plz set it
app.set("view engine","hbs");

//to tell express application about path
app.set("views",templatepath);
//to incude partials
hbs.registerPartials(partialpath);
app.get("/",(req,res)=>{
//res.send("Hi,I am SD");
//when someone visit our webpage we want to show him a index.hbs in views folder
res.render("index");
})

//app.get("/contact",(req,res)=>{
    //res.send("Hi,I am SD");
    //when someone visit our webpage we want to show him a index.hbs in views folder
   // res.render("contact");
   // })

    app.post("/contact",async(req,res)=>{
          try{
               //  res.send(req.body);
               const userData = new User(req.body);
               await userData.save();
               res.status(201).render("index");
          }catch(error){
              res.status(500).send(error);
          }
    })
app.listen(port,()=>{
    console.log(`server is runnning at the port ${port}`);
})