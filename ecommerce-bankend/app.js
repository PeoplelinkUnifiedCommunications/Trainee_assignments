const express = require("express")
const app =express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

const mongoose  = require('mongoose');
const {Schema,model} = mongoose;


const db = async ()=>{
  try{
    await mongoose.connect("mongodb://localhost:27017/assignmentDb")
  console.log("db connected....")
  app.listen(3004,()=>console.log("server started at http://localhost:3004"))
  }catch(e){
    console.log(`DB Error:${e.message}`);
    process.exit(1);
    }
  
}

db().catch(err => console.log(err.message));

const loginSchema = new Schema({
    userName:String,
    password:String
})

const loginModel = model("Login",loginSchema)


//login post
app.post("/register/",async (request,response)=>{
    await loginModel.create({
        userName:"bharath",
        password:"Bharath@1234"
    })
    response.send(await loginModel.find())
})

//login get 
app.post("/login/",async (request,response)=>{
    const {userName,password} = request.body
    const data = await loginModel.findOne({userName,password})
    if(data === null){
        response.status(404).send("invalid UserName or Password")
        
    }else{
        response.status(200).send("login successfull")
    }
})
















module.exports = app