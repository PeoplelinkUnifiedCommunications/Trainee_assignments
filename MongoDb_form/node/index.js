const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const personDetails = require('./model/schema.js')
const cors = require('cors')    //enables cross-origin sharing
const multer = require('multer')    //middleware for handling multipart/form-data, used for uploading files
const fs = require('fs')    //used to work with the file system

const app = express()

const PORT = 8100

app.use(bodyParser.json())
app.use(cors())

//express.static() --> middleware for serving static files to express app
//__dirname --> root directory of the system 
app.use(express.static(__dirname + '/public')); 


//diskStorage --> gives full control on storing files to desk
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../form/public/')     //where to store the files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)      //name of the file
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'pdf') {
            cb(null, true)
        }
    }
})

app.get('/', async (req, res) => {
    try {
        const usersDetails = await personDetails.find()
        res.json(usersDetails)
    } catch (error) {
        console.log(error.message)
    }
})


// .single() is used for uploading single file
app.post('/', upload.single('url'), async (req, res) => {
    const { firstName, lastName, phone, email, gender, dob, company, role, password, confirmPassword } = req.body
    const url = req.file.filename
    const newUser = new personDetails({ firstName, lastName, phone, email, gender, dob, company, role, password, confirmPassword, url })
    try {
        await newUser.save()
        res.json(newUser)

    } catch (error) {
        console.log(error.message)
    }
})

app.patch("/:id", upload.single('url'), async (req, res) => {
    const { firstName, lastName, phone, email, gender, dob, company, role, password, confirmPassword, url } = req.body
    const { id: _id } = req.params

    if (req.file === undefined) {
        const updateUser = await personDetails.findByIdAndUpdate(_id, { firstName, lastName, phone, email, gender, dob, company, role, password, confirmPassword, url: url })
        res.json(updateUser)
    } else {
        const updateUser = await personDetails.findByIdAndUpdate(_id, { firstName, lastName, phone, email, gender, dob, company, role, password, confirmPassword, url: req.file.filename })
        res.json(updateUser)

        fs.unlink(`../form/public/${updateUser.url}`, () => {
            console.log(`Updated Successfully`)     //unlink --> remove file from specified path
        })
    }
})

app.delete("/:id", async (req, res) => {
    const user = req.body
    const { id: _id } = req.params
    const deleteUser = await personDetails.findByIdAndDelete(_id, user)
    fs.unlink(`../form/public/${deleteUser.url}`, (err) => {
        console.log(err)
    })
    res.json(deleteUser)
})

const CONNECTION_URL = "mongodb+srv://Pawan:Pawan007@cluster0.zvfm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, (() => {
            console.log(`server running on port no http://localhost:${PORT}`)
        }))
    ).catch((e) => {
        console.log(`Error: ${e.message}`)
    })






