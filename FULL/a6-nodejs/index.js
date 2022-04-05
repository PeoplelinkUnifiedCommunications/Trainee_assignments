const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userDetails = require("./model/schema.js")
const cors = require("cors")
const multer = require("multer")
const path = require("path")
const fs = require("fs")


const app = express();

app.use(cors());

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", async (req, res) => {

    try {
        const users = await userDetails.find();
        res.json(users)

    } catch (error) {
        console.log(error.message)
    }

})

const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../a6-reactjs/public/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const uploadStorage = multer({
    storage: ImageStorage

})




app.post("/", uploadStorage.single("imgUrl"), async (req, res) => {
    const imgUrl1 = req.file.filename
    const newUser = new userDetails({
        name: req.body.name, email: req.body.email, phone: req.body.phone, dob: req.body.dob,
        role: req.body.role, password: req.body.password, conform: req.body.conform, imgUrl: imgUrl1
    })
    console.log(newUser)
    try {
        await newUser.save();
        res.json(newUser)
    } catch (error) {
        console.log(error.message)
    }
})
app.patch("/:id", uploadStorage.single("imgUrl"), async (req, res) => {
    const { id: _id } = req.params
    const { name, email, phone, dob,
        role, password, conform, imgUrl } = req.body

    if (req.file === undefined) {
        const updateUser = await userDetails.findByIdAndUpdate(_id, { name, email, phone, dob, role, password, conform, imgUrl: imageUrl })
        res.json(updateUser)
    } else {
        const updateUser = await userDetails.findByIdAndUpdate(_id, { name, email, phone, dob, role, password, conform, imgUrl: req.file.filename })
        res.json(updateUser)

        fs.unlink(`../a6-reactjs/public/${updateUser.imgUrl}`, () => {
            console.log(`Updated Successfully`)     //unlink --> remove file from specified path
        })
    }
})
// try {
//     const updatedUser = await userDetails.findByIdAndUpdate(_id, {
//         name, email, phone, dob,
//         role, password, conform, imgUrl

//     })
//     res.json(updatedUser)
//     console.log(imgUrl)

// } catch (error) {
//     console.log(error.message)
// }
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
