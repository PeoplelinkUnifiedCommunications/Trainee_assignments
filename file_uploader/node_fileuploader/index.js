const express = require("express")
const multer = require("multer")
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require("path")

const app = express()

app.use(express.static('public')); 
app.use('/uploads', express.static('images'));

app.use(bodyParser.json())
app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const uploadStorage = multer({ storage: storage })

// Single file
app.post("/upload/single", uploadStorage.single("file"), (req, res) => {
  console.log(req.file)
  return res.send(req.file)
})


app.get("/uploads/:id", (req, res) => {
    const {id: id} = req.params
    res.sendFile(path.join(__dirname, `./uploads/${id}`));
  });
// //Multiple files
// app.post("/upload/multiple", uploadStorage.array("file", 10), (req, res) => {
//   console.log(req.files)
//   return res.send("Multiple files")
// })

app.listen(8000 || process.env.PORT, () => {
  console.log("Server on...")
})