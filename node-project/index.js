const express =require("express");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const path = require("path");

const dbPath = path.join(__dirname,"parkingSlot.db");
let db = null;
const initializerDBAndServer = async () =>{
    try{
        db = await open({
            filename:dbPath,
            driver:sqlite3.Database
        });
        app.listen(3001,()=>{
            console.log("Server Started at http://localhost:3001/")
        })
    }catch(e){
        console.log(`DB Error:${e.message}`);
        process.exit(1);
    }
}
initializerDBAndServer();

app.post("/addSlot/",async (request,response)=>{
    const {id,slNo,ownerName,color,regNumber} = request.body;
    const addSlotQuery = `INSERT INTO data (id,sl_no,owner_name,color,reg_number) VALUES(${id},${slNo},"${ownerName}","${color}","${regNumber}");`;
    await db.run(addSlotQuery)
    response.send("slot successfully created")
})

app.get("/getSlots/",async (request,response)=>{
    const getSlotQuery = `SELECT * FROM data`;
    const data = await db.all(getSlotQuery)
   
    const updatedData = data.map(each=>(
        {
            id:each.id,
            slotNumber:each.sl_no,
            regNumber:each.reg_number,
            ownerName:each.owner_name,
            color:each.color
        }
))
    response.send(updatedData)
})

app.delete("/deleteSlot/:slotId/",async (request,response)=>{
    const {slotId} = request.params;

    const deleteSlotQuery = `DELETE FROM data WHERE id=${slotId}`;
    await db.run(deleteSlotQuery)
    response.send("slot removed")
})

app.put('/updateSlot/:slotId',async (request,response)=>{
    const {slotId} = request.params;
    const updateData = request.body;
    const {id,slNo,ownerName,color,regNumber} = updateData;
    const updatedSlotQuery = `UPDATE data SET id=${id},sl_no=${slNo},owner_name="${ownerName}",color="${color}",reg_number="${regNumber}" WHERE id=${id}`;
    await db.run(updatedSlotQuery);
    response.send("Slot Data Updated")
})



module.exports = app;