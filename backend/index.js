import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";
import Quote from 'inspirational-quotes';
import multer from "multer";



const app = express();
app.use(cors())
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/page", (req, res)=>{
    res.send(Quote.getQuote())
 })

app.get("/second", (req, res)=>{
  res.send(Quote.getQuote())
})


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


 
 
const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
)













