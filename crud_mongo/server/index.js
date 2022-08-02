const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express("");
// const bodyParser = require("body-parser")

const NameModel = require("./models/Name");

app.use(express.json());
app.use(cors());




app.post('/insert', async (req,res)=>{

    const fullName = req.body.name
    const Area = req.body.area 
    
    const name = new NameModel({name : fullName,area : Area})

    try {
        await name.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});

app.get('/read',async (req,res)=>{
    NameModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
});


app.put('/update', async(req,res)=>{
    const newName = req.body.newName;
    const newArea = req.body.newArea
    const id = req.body.id;
    try {
        await NameModel.findById(id,(err,updatedFood)=>{
            updatedFood.name = newName;
            updatedFood.area = newArea;
            updatedFood.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err);
    }
});
 
app.delete("/delete/:id", async (req,res)=>{
    const id = req.params.id;

    await NameModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});



mongoose.connect(
    "mongodb+srv://newUser1:pa13669@crudoperation.yjkvr.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
});





app.listen(3001,()=>{
    console.log("Server running on port 3001...");
});