import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";



const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    console.log("hai")
 })
 
 app.get("/page" , (request, response)=>{
    console.log("At page")
    
 })

const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
)


  