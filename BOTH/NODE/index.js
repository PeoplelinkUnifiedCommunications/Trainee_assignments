const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userDetails = require("./schema.js");


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    const userName = await userDetails.find()
    res.send(userName);
    console.log(newUser)
})
app.post("/", async (req, res) => {
    const newUser = await new userDetails({
        name: req.body.name
    })
    try {
        await newUser.save();
        res.json(newUser)
    } catch (error) {
        console.log(error.message)
    }
})

const url = "mongodb+srv://ShantanuBiswas:Xx2660@cluster0.5bhmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(url).then(() => {
    app.listen(8888, () => {
        console.log("server is running on http:/localhost:8888")
    })
})
    .catch((error) => {
        console.log(error.message)
    })

