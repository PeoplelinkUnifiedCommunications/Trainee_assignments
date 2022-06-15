const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json());
const bodyParser = require("body-parser")

const FormModel = require("./models/Form")


app.use(cors())


app.get("/", async (req, res)=>{

   const form = new FormModel({fName : "sujitha", lName: "konda"})
   try{
    await form.save();
     res.send("")

   }catch(err){
       console.log(err);
   }
});

app.get("/getUsers", async(req, res)=>{
    FormModel.find({}, (err, results)=>{
        if(err){
            res.send(err);
        }else{
            res.send(results)
        }
    })
})



app.post("/addUser", async(req, res)=>{
    const name = req.body.name;
    const secondName = req.body.secondName;
    const form = new FormModel({fName : name, lName: secondName})
   try{
    await form.save();
     res.send("success")

   }catch(err){
       console.log(err);
   } 
})

app.delete("/delete/:id", async(req, res)=>{
    const id = req.params.id
    FormModel.findByIdAndRemove(id).exec()
})



app.put("/update", async (req, res)=>{

    const Id = req.body.id;
    const updatedName = req.body.name;
    const updatedSecondName = req.body.secondName
    

    try{
        await FormModel.findById(Id, (error, userToUpdate)=>{
            userToUpdate.fName = updatedName;
            userToUpdate.lName = updatedSecondName;
            userToUpdate.save();
        })
    }
    catch(error){
       console.log(error)
    }


})

const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
)

