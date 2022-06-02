import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";
import multer from "multer";
import users from "./model/schema.js";

const app = express();
app.use(cors())

const fileStorageDisk = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null, "Images/");
    },
    filename : (req,file,cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
});

const upload = multer({storage : fileStorageDisk});

app.post("/Images", upload.single("profile"),(req,res) => {
    console.log(req.file);
    res.send(req.file);
});




app.use(bodyParser.json());

app.use(cors());


app.get("/", async(req,res) => {
    // res.sendFile("/first.html", {root: __dirname}); //path to the current directory
    try {
        const userDetails = await users.find();
        res.status(200).json(userDetails);
    }
    catch(error) {
        console.log(error);
    }
})

app.post("/", async(req, res) => {
    const user = req.body;
    const newUser = new users(user)
    try {
        await newUser.save()
        res.json(newUser)
    }
    catch(error) {
        console.log(error);
    }
})

app.patch("/:id", async(req, res) => {
    const user = req.body;
    const { id : _id } =req.params;
    const updateUser = await users.findByIdAndUpdate(_id, user);
    res.json( updateUser );
})

app.delete("/:id", async(req, res) => {
    const user = req.body;
    const { id : _id } =req.params;
    const deleteUser = await users.findByIdAndDelete(_id, user);
    res.json( deleteUser );
})

const CONNECTION_URL = 'mongodb+srv://Hemasaroja12:neil@cluster0.wawx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
)
