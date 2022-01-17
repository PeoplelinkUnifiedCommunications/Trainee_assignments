const express = require("express")
const app =express()
app.use(express.json());

// const cors = require('cors')
// app.use(cors());

const mongoose = require('mongoose');
const { Schema,model } = mongoose;

const db = async ()=>{
  try{
    await mongoose.connect("mongodb://localhost:27017/parkingSlot")
  console.log("db connected....")
  app.listen(3004,()=>console.log("server started at http://localhost:3004"))
  }catch(e){
    console.log(`DB Error:${e.message}`);
    process.exit(1);
}
  
}

db()
const parkingSlotSchema = new Schema({
    id:String,
    sl_no:Number,
    owner_name:String,
    reg_number:String,
    color:String

  });
const parkingSlotModel = model('ParkingSlot', parkingSlotSchema);
// const data = new parkingSlotModel({
//   sl_no:002,
//   owner_name:"tarun",
//   reg_number:"ad13-ed-1234 ",
//   color:"black"
// })

app.post("/add/",async (request,response)=>{

  const {id,slotNumber,ownerName,regNumber,color} = request.body;
  const data = new parkingSlotModel({
   
    id:id,
    sl_no:slotNumber,
    owner_name:ownerName,
    reg_number:regNumber,
    color:color
  })
  await data.save();
  response.send("successfully saved")
})