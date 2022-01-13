const express = require("express")
const app =express()
const cors = require('cors')
app.use(express.json())
app.use(cors());
const mongoose  = require('mongoose');
const { application } = require("express");
const {Schema,model} = mongoose;


const db = async ()=>{
  try{
    await mongoose.connect("mongodb://localhost:27017/practice")
  console.log("db connected....")
  app.listen(3004,()=>console.log("server started at http://localhost:3004"))
  }catch(e){
    console.log(`DB Error:${e.message}`);
    process.exit(1);
    }
  
}

db().catch(err => console.log(error));

const moviesSchema = new Schema({
    title:String,
    writer:String,
    year:Number,
    actors:[String],
    franchise:String,
    synopsis:String

})

const MoviesModel = model("Movies",moviesSchema);


//add multiple data
app.post("/postData/",async (request,response)=>{
    const {title,writer,year,actors,franchise,synopsis} = request.body;

    await MoviesModel.insertMany(request.body)
    response.send("inserted data")
})

//add single data
app.post("/addData/",async (request,response)=>{
    const {title,writer,year,actors,franchise,synopsis} = request.body;

    await MoviesModel.create(request.body)
    response.send("inserted data")
})

//get all data
app.get("/get/",async (request,response)=>{
    const data = await MoviesModel.find()
    response.send(data)
})

//get title contain i and send title and writer fields only

app.get("/getFields/",async (request,response)=>{
    const data = await MoviesModel.find({ title: /i/}, 'title writer', { skip:2 });
    response.send(data)
})

//get data by id
app.get("/get/:id",async (request,response)=>{
    const {id} = request.params
    const data = await MoviesModel.findById(id);
    response.send(data)
})

//
app.get("/data/",async (request,response)=>{
    const {writer="",actors="",franchise=""} = request.query
    const data = await MoviesModel.find({writer,actors,franchise});
    response.send(data)
})

//
app.get("/year/",async (request,response)=>{
    const {less,greater} = request.query
    console.log(request.query)
    const data = await MoviesModel.find({
        year:{$gte:less,$lte:greater},
    });
    response.send(data)
})












module.exports = app
