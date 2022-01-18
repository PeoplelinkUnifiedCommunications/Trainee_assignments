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

//and()

app.get("/getAnd/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
          $project:
             {
               student_name: 1,
               age:1,
               result: { $and: [ { $gt: ["$age",17] }, { $lt: ["$age",19] } ] }
             }
        }
      ])
    response.send(data)
})

//get student_name = shiva and section B
app.get("/getStudentNameSection/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
          $match:{$and:[{student_name:/a/},{section:"B"}]}
        },
        {
            $project:
               {
                 student_name: 1,
                 age:1,
               }
          }
      ])
    response.send(data)
})

//get student_name =shiva or section B

app.get("/getStudentNameOrSection/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
          $match:{$or:[{student_name:/a/},{section:"B"}]}
        },
        {
            $project:
               {
                 student_name: 1,
                 age:1,
               }
          }
      ])
    response.send(data)
})


//get age ==17 or age ==18
app.get("/getAge/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
          $match:{$or:[{age:{$eq:17}},{age:{$eq:18}}]}
        },
        {
            $project:
               {
                 student_name: 1,
                 age:1,
                 section:1
               }
          }
      ])
    response.send(data)
})

//not()
app.get("/getNotAge/",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $match:{$not:[ { $eq: [ "$section", "B" ] } ]}
        } 
      ])
    response.send(data)
})








///////////////////////////////////////////////////////////////////////////////
/////////     set operations (Aggregations) //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


const setEqualSchema = new Schema({
    A:Array,
    B:Array
})

const setEqualModel = model("SetEqual",setEqualSchema)

app.post('/addSetEqualData/',async (request,response)=>{
    await setEqualModel.insertMany(request.body)
    response.send("inserted")
})

///get setEqual

app.get('/getSetEqualData/',async (request,response)=>{
    const data = await setEqualModel.aggregate(
        [
          { $project: { A: 1, B: 1, sameElements: { $setEquals: [ "$A", "$B" ] }, _id: 0 } },
          {$match:{sameElements:true}}
        ]
     ).limit(2)
    response.send(data)
})

//get setIntersection to get common data
app.get('/getIntersectionData/',async (request,response)=>{
    const data = await setEqualModel.aggregate(
        [
          { $project: 
            { 
              A: 1, 
              B: 1, 
              commonToBoth: { $setIntersection: [ "$A", "$B" ] }, 
              _id: 0 
            }
        }
        ]
     )
    response.send(data)
})

//get all elements using union
app.get("/getUnionData/",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:
            {
                A:1,
                B:1,
                allValues:{$setUnion:["$A","$B"]},
                _id:0
            }
        }
    ])
    response.send(data)
})

//get elements from B which is not A
app.get("/getDifferenceData/",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:
            {
                A:1,
                B:1,
                inBOnly:{$setDifference:["$B","$A"]},
                _id:0
            }
        }
    ])
    response.send(data)
})

//get subset values
app.get("/getIsSubsetData/",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:
            {
                A:1,
                B:1,
                AIsSubset:{$setIsSubset:["$A","$B"]},
                _id:0
            }
        }
    ])
    response.send(data)
})

//get anyElementTrue
app.get("/getAnyElementTrue/",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:
            {
                A:1,
                B:1,
                isAnyTrue:{$anyElementTrue:["$A"]},
                _id:0
            }
        }
    ])
    response.send(data)
})

//get allElementTrue
app.get("/getAllElementsTrue/",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:
            {
                A:1,
                B:1,
                isAnyTrue:{$allElementsTrue:["$A"]},
                _id:0
            }
        }
    ])
    response.send(data)
})




///////////////////////////////////////////////////////////////

////   Arithmetic Aggregation Operators//////////////////////

////////////////////////////////////////////////////////////

//Abs()

app.get("/getAbsValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                delta: {
                    $abs:{
                        $subtract:[
                            "$age",20
                        ]
                    }
                }
            }
        }
    ])
    response.send(data);

})


//add()

app.get("/getAddedValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                total_fee:{
                    $add:[
                        "$course_fee",5000
                    ]
                }
            }
        }
    ])
    response.send(data);

})

//ceil()

app.get("/getCeilValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                ceilingValue: { $ceil: { $divide: [ "$course_fee", 2.5 ] } } 
            }
        }
    ])
    response.send(data);

})

//exp()

app.get("/getExpValues",async (request,response)=>{
    const data =  await studentModel.aggregate([
        {
            $project:
            {
                expValue: { $exp: 2 }  
            }
        }
    ])
    response.send(data);

})


//ceil()

app.get("/getFloorValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                floorValue: { $floor: { $divide: [ "$course_fee", 2.5 ] } } 
            }
        }
    ])
    response.send(data);

})

//ln()
app.get("/getLnValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                lnValue: { $ln: "$course_fee" } 
            }
        }
    ])
    response.send(data);

})











module.exports = app