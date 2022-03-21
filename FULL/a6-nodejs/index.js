import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userDetails from "./model/schema.js";
import cors from "cors";


const app = express();

app.use(cors());


app.use(bodyParser.json());

app.get("/", async (req, res) => {

    try {
        const users = await userDetails.find();
        res.json(users)

    } catch (error) {
        console.log(error.message)
    }

})
//for AWS s3
app.get("s3Url", (req, res) => {

})

app.post("/", async (req, res) => {
    const requestData = req.body;
    const newUser = new userDetails(requestData)

    try {
        await newUser.save();
        res.json(newUser)

    } catch (error) {
        console.log(error.message)

    }
})
app.patch("/:id", async (req, res) => {
    const { id: _id } = req.params
    const update = req.body;
    try {
        const updatedUser = await userDetails.findByIdAndUpdate(_id, update)
        res.send("updated sucessfully")

    } catch (error) {
        console.log(error.message)
    }
})
app.delete("/:id", async (req, res) => {
    const { id: _id } = req.params
    try {
        const deleteUser = await userDetails.findByIdAndDelete(_id)
        res.send(deleteUser)
    } catch (error) {
        console.log(error.message)
    }
})

const url = "mongodb+srv://ShantanuBiswas:Xx26601234@cluster0.5bhmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(() => {
    app.listen(8001, () => {
        console.log("server is running on port 8001")
    })
}).catch((error) => {
    console.log(error.message)
})
