import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import users from './model/users.js'
import cors from "cors";

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get("/", async (req, res) => {
    try{
        const userDetails = await users.find()
        res.status(200).json(userDetails)
    }
    catch(error){
        console.log(error)
    }

})
app.post('/', async(req, res) => {
    const user = req.body
    const emailExist = await users.findOne({email: user.email})
    if(emailExist) return res.status(400).send("Email already Exist")
    const newUser = new users(user)
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        console.log(error.message)
    }
})

app.delete("/:id", async (req, res) => {
    const user = req.body
    const {id: _id} = req.params
   const deleteUser =  await users.findByIdAndDelete(_id, user)
   console.log(deleteUser)
})


app.patch("/:id", async (req, res) => {
    const user = req.body
    const {id: _id} = req.params
    const updatedUser = await users.findByIdAndUpdate(_id, user)
    res.json(updatedUser)
})


const CONNECTION_URL = "mongodb+srv://deepika:DeepuM6001@cluster0.mmpxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => 
app.listen(5000, () => {
    console.log("Server running on port  http://localhost:5000/")
})
)
.catch((error) => {
    console.log(error.message)
})