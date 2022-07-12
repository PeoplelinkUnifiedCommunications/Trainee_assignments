const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json());
// const jwt = require('jsonwebtoken');
const http = require("http");
const { Server } = require("socket.io");
const redis = require("redis");
app.use(cors())
const ChatUsersModel = require("./models/ChatUsers")



app.get("/contacts", async(req,res)=>{
    const email = req.headers["x-token"];
    console.log("emaillllllllll",email)

    try{
        ChatUsersModel.find({Email:{ $ne: email }}).then((response)=>{
            res.send(response)
        }).catch((error)=>{
            console.log(error)
        })
    }catch(error){
        console.log(error)
    }
})


app.post("/create", async(req,res)=>{
    const {email} = req.body
    try{
        const exist = await ChatUsersModel.findOne({Email:email})
        if (!exist){
            const newUser = new ChatUsersModel({Email:email})
            await newUser.save()
            res.send("Created")
        }else{
            res.status(200).send("Exist")
        }  
   }catch(error){
        res.send("Server Error")
    }
   
})




const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(8050, () => {
            console.log("Server is running on port 8050");
        })
    ).catch(() => {
        console.log("error connecting")
    }
    )