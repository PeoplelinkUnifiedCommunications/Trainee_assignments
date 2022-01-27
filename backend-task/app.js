const { application } = require("express")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {Schema,model} = mongoose
app.use(express.json())

const initializeDBAndServer =async ()=>{
    try{
       await mongoose.connect("mongodb://localhost:27017/backendTask")
        .then(()=>{
            console.log("DB Connected .....")
            app.listen(3000,()=>{
                console.log("Server started at http://localhost:3000")
            })
        })
        .catch((e)=>console.log(`DB Error: ${e.message}`))
    }catch(e){
        console.log(`DB Error: ${e.message}`)
        process.exit(1);
    }
}

initializeDBAndServer()


//users Schema

const userSchema = new Schema({
    name:{type:String,required:true},
    role:{type:String,required:true}
})

const userModel = model("users",userSchema)


//adding users
app.post('/addUser', async (request,response)=>{
    const {name,role} = request.body
    try{
        if (role.toLowerCase() === "student" || role.toLowerCase() === "teacher"){
            await userModel.create({
                name,role
            }).then(async ()=>{
                response.send(await userModel.find())
            })
        }else{
            response.send("please give role as student or teacher")
        }
    }catch(e){
        response.status(404).send(e.message)
    }
})

//get users
app.get('/getUsers', async (request,response)=>{
    try{
        const data = await userModel.find()
        response.send(data)
    }catch(e){
        response.send(e.message)
    }
})

//delete user
app.delete('/deleteUser/:id', async (request,response)=>{
    const {id} = request.params
    try{
        const isTrue = await userModel.findOne({_id:id})
        if(isTrue!== null){
            await userModel.deleteOne({_id:id})
            .then(async ()=>{
                response.send(await userModel.find())
            })
            .catch((e)=>{
                response.send(e.message)
            })
        }else{
            response.send("no data is available to delete")
        }
        
    }catch(e){
        response.send(e.message)
    }
})

//update User
app.put('/updateUser/:id',async (request,response)=>{
    const {id} = request.params
    try{
        const isTrue = await userModel.findOne({_id:id})
        if(isTrue!== null){
            await userModel.updateOne({_id:id},[{$set : request.body}])
            .then(async ()=>{
                response.send(await userModel.find())
            })
            .catch((e)=>{
                response.send(e.message)
            })
        }else{
            response.send("no data is available to update")
        }
        
    }catch(e){
        response.send(e.message)
    }
})

/* creating class Schema*/

const classSchema = new Schema({
    className:{type:Number},
    description:{type:String},
    teachers:{type:Array},
    students:{type:Array}
})

const classModel = model("classes",classSchema)


//get class data api

app.get('/getClassData',async (request,response)=>{
    try{
        const data = await classModel.find()
        response.send(data)
    }catch(e){
        response.send(e.message)
    }
})

//post Class Data 

app.post('/postClassData/:id',async (request,response)=>{
    const {id} = request.params
    try{
       const data =  await userModel.findOne({_id:request.params.id})
       if(data === null){
            response.send("user Not existed")
        }else{
            const isClassExists = await classModel.findOne({className:request.body.className})
            if (isClassExists===null){
                const classData = await classModel.create(
                    request.body
                )
                if(data.role.toLowerCase()==="student"){
                    classData.students.push(data._id)
                }else{
                    classData.teachers.push(data._id) 
                }
                await classData.save();
                response.send(await classModel.find())

            }else{
                if(data.role.toLowerCase()==="student"){
                    
                    const isArrayValueExists = await classModel.findOne({
                        students:{$in :data._id}
                    })
                    
                    if(isArrayValueExists===null){
                        isClassExists.students.push(data._id)
                        await isClassExists.save();
                        response.send(await classModel.find())
                    }else{
                        response.send("Student already exists")
                    }
                }else{
                    const isArrayValueExists = await classModel.findOne({
                        teachers:{$in :data._id}
                    })
                    if(isArrayValueExists===null){
                        isClassExists.teachers.push(data._id)
                        await isClassExists.save();
                        response.send(await classModel.find())
                    }else{
                        response.send("Teacher already exists")
                    }
                }
            }
        }
        
    }catch(e){
        response.send(e.message)
    }
})


module.exports = app