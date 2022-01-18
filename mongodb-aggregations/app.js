const express = require("express")
const app =express()

app.use(express.json())

const mongoose  = require('mongoose');
const { application } = require("express");
const {Schema,model} = mongoose;


const db = async ()=>{
  try{
    await mongoose.connect("mongodb+srv://bharath:bharath@cluster0.l0zxe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  console.log("db connected....")
  app.listen(3004,()=>console.log("server started at http://localhost:3004"))
  }catch(e){
    console.log(`DB Error:${e.message}`);
    process.exit(1);
    }
  
}

db().catch(err => console.log(error));

const studentSchema = new Schema({
    student_name: String,
    class: Number,
    section: String,
    subjects: Array,
    course_fee: Number,
    date_of_joining: String,
    age: Number,
    weight: Number,
})

const studentModel = model("Students",studentSchema);


//add multiple data
app.post("/postData/",async (request,response)=>{
    await studentModel.insertMany(request.body)
    response.send("inserted data")
})



//get all data
app.get("/getData/",async (request,response)=>{
    const data = await studentModel.find()
    response.send(data)
})


//Aggregate()

app.get("/aggregate/",async (request,response)=>{
    const aggregateData = await studentModel.aggregate([
       {$project:{"student_name":1,_id:0}}
    ])
    response.send(aggregateData)
})

//Aggregate.prototype.Symbol.asyncIterator()

app.get("/nameGreaterThanAge/",async (request,response)=>{
    const data = studentModel.aggregate([
        {
            $match : { age : { $gte : 13}}
        },
    ])
    for await (let doc of data) {
        console.log(doc.student_name,doc.age);
      }
})

//get student names whose age is greater than 30

app.get("/getNamesAndAge/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $match : { age : { $gte : 17},section:{$eq:"A"}}
        },
        {
            $project : {"student_name":1,"age":1,}
        },
         
    ])
   
    response.send(data)  
})

//
app.get("/getAddedAge/",async (request,response)=>{
    const aggregateData = await studentModel.aggregate([
        {$project:{"student_name":1,_id:0,age:1}}
     ])
     await studentModel.aggregate.addFields({
        age: { $add: ['$val', 10]}
     })
     response.send(aggregateData)  
})


// disk usage
app.get("/diskUsage/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $match : { age : { $gte : 18}}
        },
    ]).allowDiskUse(true);
    response.send(data)
})

//append()

app.get("/append/",async (request,response)=>{
    const aggregate = await studentModel.aggregate()
    // const pipeline = [
    //     {
    //         $match : { age : { $gte : 17},section:{$eq:"A"}}
    //     },
    //     {
    //         $project : {"student_name":1,"age":1,}
    //     },
         
    // ]
    // const data = await studentModel.aggregate(pipeline).collation({ locale: 'en_US', strength: 1 });
   
    // response.send(data)  

    const pipeline = [{ $match: { daw: 'Logic Audio X' }} ];
aggregate.append(pipeline);
})

//count()
app.get("/countNames/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $match : { age : { $gte : 17},section:{$eq:"A"}}
        },
        {
            $project : {"student_name":1,"age":1,}
        },
         
    ]).count("student_details")
   
    response.send(data)  
})

//facet
app.get("/facet/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $match : { age : { $gte : 13},section:{$eq:"A"}}
        },
        {
            $project : {"student_name":1,"age":1,"section":1}
        },
         
    ]).facet({
        student_name: [{ groupBy: '$section' }],
      });
   
    response.send(data)  
})

//limit()
app.get("/limit/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $match : { age : { $gte : 13},section:{$eq:"A"}}
        },
        {
            $project : {"student_name":1,"age":1,"section":1}
        },
         
    ]).limit(2)
   
    response.send(data)  
})

//hint()
app.get("/group/",async (request,response)=>{
    const data = await studentModel.aggregate().group({$student_name :"$student_name"})
    response.send(data)  
})

//match()
app.get("/match/",async (request,response)=>{
    const data = await studentModel.aggregate().match({ student_name: { $in: [/ara/] } })
    response.send(data)  
})

//sort()
app.get("/sort/",async (request,response)=>{
    const data = await studentModel.aggregate().sort({age:'desc'})
    response.send(data)  
})


//////////////////////////////////////////////////////////////////////////////////////////////

///post Schema

const postSchema = new Schema({
    title:String,
    author:String,
    likes:Number
});

const postModel = model("Posts",postSchema);

//addPosts
app.post("/addPosts/",async (request,response)=>{
    await postModel.insertMany(request.body)
    response.send("inserted data")
})

//getPosts
app.get("/getPosts/",async (request,response)=>{
    const data = await postModel.find()
    response.send(data)
})


// comments Schema

const commentSchema = new Schema({
    postTitle:String,
    comment:String,
    likes:Number
})

const commentModel = model("Comments",commentSchema)

//addComments
app.post("/addComments/",async (request,response)=>{
    await commentModel.insertMany(request.body)
    response.send("inserted data")
})

//getComments
app.get("/getComments/",async (request,response)=>{
    const data = await commentModel.find()
    response.send(data)
})

//lookup()

app.get("/lookup/",async (request,response)=>{
    const data = await postModel.aggregate([
        { $lookup:
            {
               from: "Comments",
               localField: "title",
               foreignField: "postTitle",
               as: "comments"
            }
        }
    ])
    response.send(data);
})








module.exports = app