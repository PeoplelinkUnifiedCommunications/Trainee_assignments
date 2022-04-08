const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const users = require('./schema')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 8010

// app.get("/", async(req, res) => {
//     try {
//         const user = await users.find()
//         res.send(user)
//     } catch (error) {
//         console.log(error.message)
//     }
// })

// app.post("/", async(req, res) => {
//     const newUser = new users(req.body)
//     try {
//         await newUser.save()
//         res.send(newUser)
//     } catch (error) {
//         console.log(error.message)
//     }
// })

app.get('/', async(req, res) => {
    try {
        const user = await users.find()
        res.json(user)
    } catch (error) {
        console.log(error.message)
    }
})

app.post('/', async(req, res) => {
    const newUser = new users(req.body)
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        console.log(error.message)
    }
})

const URL = 'mongodb+srv://Pawan:pawan007@cluster0.zvfm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL)
.then(() => {
    app.listen(port, () => {
        console.log("server running")
    })
})
.catch((e) => {
    console.log(e.message)
})




