import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
const PORT = process.env.PORT || 9003

const app = express()

app.use(express.json())
// app.use(express.urlencoded())
app.use(cors())

// mongoose.connect('mongodb+srv://Krishna:Krishna4377@cluster0.qugbi.mongodb.net/DB?retryWrites=true&w=majority')
// .then(()=>{
//     console.log("SuccessFully Connected...")
// }).catch((err)=>{
//     console.log("Something went wrong..." , err)
// })

mongoose.connect('mongodb://localhost:27017/db')
.then(()=>{
    console.log("SuccessFully Connected...")
}).catch((err)=>{
    console.log("Something went wrong..." , err)
})




const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = mongoose.model("user", userSchema)


//Routes
app.post("/login", (req, res)=>{
    const {email,password} = req.body
    User.findOne({email:email},(err, user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfull", user:user})
            }else{
                res.send({message:"password didn't match"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})

app.post("/register", (req, res)=>{
    const {name,email,password} = req.body

    User.findOne({email:email},(err, user)=>{
        if(user){
            res.send({message:"User already registerd"})
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"successful Registered"})
                }
            })            
        }
    })
    
})

app.listen(PORT, ()=>{
    console.log("BE started at port 9002")
})