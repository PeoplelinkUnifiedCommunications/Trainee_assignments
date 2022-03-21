import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import personDetails from "./model/schema.js"
import cors from 'cors'   //Enables cross-origin
const app = express()

const PORT = 8100

app.use(bodyParser.json())
app.use(cors())

app.get('/', async(req, res) => {
    try {
        const usersDetails = await personDetails.find()
        res.json(usersDetails)
    } catch (error) {
        console.log(error.message)
    }
})

app.post('/', async(req, res) => {
    const user = req.body
    const newUser = new personDetails(user)
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        console.log(error.message)
    }
})

app.patch("/:id", async(req, res) => {
    const user = req.body
    const {id: _id} = req.params
    const updateUser = await personDetails.findByIdAndUpdate(_id, user)
    res.json(updateUser)
})

app.delete("/:id", async(req, res) => {
    const user = req.body
    const {id: _id} = req.params
    const deleteUser = await personDetails.findByIdAndDelete(_id, user)
    res.json(deleteUser)
})

const CONNECTION_URL = "mongodb+srv://Pawan:Pawan007@cluster0.zvfm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, (() => {
            console.log(`server running on port no http://localhost:${PORT}`)
        }))
    ).catch((e) =>{
    console.log(`Error: ${e.message}`)
})






