import express from 'express';
import mongoose from 'mongoose';

const app = express()
app.use(express.json())

// const url = "mongodb+srv://Krishna:Krishna4377@cluster.qugbi.mongodb.net/db?retryWrites=true&w=majority"
const url = 'mongodb://localhost:27017/db1'

mongoose.connect(url)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.listen(8000, ()=>{
    console.log("port running on localhost:8000")
})

const dataSchema = new mongoose.Schema({
    sno:Number,
    name:String,
    age:Number
})

const dataModel = mongoose.model('Data', dataSchema)

app.post('/add', async (req, res)=>{
    const {sno, name, age} = req.body
    const data = new dataModel({
        sno,
        name,
        age
    }) 
    await data.save()
    res.send("successfully saved")
})

app.get("/", async (req, res)=>{
    const data = await dataModel.find()
    res.send(data)
})

app.delete('/deletename/:sno/', async (req, res)=>{
    const {name} = req.params
    const deletedata = await dataModel.deleteOne({name:name})
    res.send("Deleted")
})

app.put('/change/:sno1/', async (req, res)=>{
    const {sno1} = req.params
    const {sno, name, age} = req.body
    const changedata = await dataModel.updateOne(
        {sno:sno},
        {
            $set:{
                sno,
                name,
                age
            },
        }
    )
    res.send("Updated")
})