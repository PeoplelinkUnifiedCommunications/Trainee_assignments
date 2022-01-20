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



//////////////////////////////////////////////////////////////////////
/////////////////String aggregation operations //////////////////////
//////////////////////////////////////////////////////////////////////

//concat()

app.get("/getConcatValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                itemDescription: { $concat: [ "$student_name", " - ", "$date_of_joining" ] } 
            }
        }
    ])
    response.send(data);

})


//$substr()

app.get("/getSubStringValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                date_of_joining:1,
                year:{ $substr: [ "$date_of_joining", 8, 11 ] }
            }
        }
    ])
    response.send(data);

})

//$toLower()
app.get("/getToLowerValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                lowerCaseName:{$toLower:"$student_name"}
            }
        }
    ])
    response.send(data);

})

//$toUpper()
app.get("/getToUpperValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                lowerCaseName:{$toUpper:"$student_name"}
            }
        }
    ])
    response.send(data);

})

//$strcasecmp()

app.get("/getStringCompareValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:
            {
                student_name:1,
                comparisonResult: { $strcasecmp: [ "$student_name", "bharath" ] }
            }
        }
    ])
    response.send(data);

})


//////////////////////////////////////////////////////////////////////////////////
/////////////////////// pipeline aggregations operations ////////////////////////
////////////////////////////////////////////////////////////////////////////////


//$redact()


app.get("/getRedactValues",async (request,response)=>{
    const data = await studentModel.aggregate([
       
            {
                $redact:{
                    $cond:{
                        if: { $gt: [ { $size: {
                            $setIntersection:["$subjects",["fluid","eng"]]
                        } }, 0 ] },
                        then: "$$PRUNE",
                        else: "$$DESCEND"
                    }
                }
            }
        
    ])
    response.send(data);

})

//$unwind()


app.get("/getUnwindValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {$match:{student_name:"Bharath"}},
        { $unwind:"$subjects"}
        
    ])
    response.send(data);

})

//$group()


app.get("/getGroupValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $group : {
               _id : null,
               totalFeeAmount: { $sum: "$course_fee" },
              
            }
          }
        
    ])
    response.send(data);

})

//$sample()

app.get("/getSampleValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        { $sample: { size: 3 } }    
    ])
    response.send(data);
})

//$sort()

app.get("/getSortValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        { $sort:{student_name:1 }}    
    ])
    response.send(data);
})

//$out()

app.get("/getOutValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        { $group :{ _id:"$class",students:{$push: "$student_name"}}},
        {$out:"stud"} 
    ])
    response.send(data);
})




///////////////////////////////////////////////////////////////////////////////
////////////////////// Array Aggregation Operators  //////////////////////////
/////////////////////////////////////////////////////////////////////////////

//$arrayElemAt()

app.get("/getArrayElementAtValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:{
                data:{
                    $arrayElemAt:[
                        "$subjects",0
                    ]
                }
            }
        }
    ])
    response.send(data);
})

//$concatArrays()

app.get("/getConcatArrayValues",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:{
                items:{
                    $concatArrays:["$A","$B"]
                }
            }
        }
    ])
    response.send(data);
})

// $filter()

app.get("/getFilterValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:{
                items:{
                    $filter: {
                        input:"$subjects",
                        as:"sub",
                        cond:{$eq:[{$arrayElemAt:[
                            "$item",0
                        ]},'social']}
                    }
                }
            }
        }
    ])
    response.send(data);
})

// $isArray()

app.get("/getIsArrayValues",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:{
                items:{
                $cond:
                    {
                    if: { $and: [ { $isArray: "$A" }, true ] },
                    then: { $concatArrays: [ "$A", "$B" ] },
                    else: "One or more fields is not an array."
                    }
                }
            }
        }
    ])
    response.send(data);
})

// $size()

app.get("/getSizeValues",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:{
                B:1,
                items:{
                $cond:
                    {
                    if: { $isArray: "$A" },
                    then: { $size:"$B" },
                    else: "NA"
                    }
                }
            }
        }
    ])
    response.send(data);
})

// $slice()

app.get("/getSliceValues",async (request,response)=>{
    const data = await setEqualModel.aggregate([
        {
            $project:{
                B:1,
                items:{
                    $slice:["$B",-2,1]
                }
            }
        }
    ])
    response.send(data);
})

//////////////////////////////////////////////////////////////////
//////////////////Date Aggregation Operators/////////////////////
////////////////////////////////////////////////////////////////

const dateSchema = new Schema({
    item:String,
    price:Number,
    quantity:Number,
    date:{ type: Date, default: Date.now }
})

const dateModel = model("Dates",dateSchema)

app.post("/addDateData/", async (request,response)=>{
    const {item,price,quantity,date} = request.body
    const updatedDate = new Date(date)
    await dateModel.create({
        item,
        price,
        quantity,
        date: updatedDate
    })
    response.send(await dateModel.find())
})

//$year()

app.get("/getYearValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                year: { $year: "$date" }
              }
        }
    ])
    response.send(data);
})

//$month()
app.get("/getMonthValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                month: { $month: "$date" }
              }
        }
    ])
    response.send(data);
})

//$dayOfMonth()
app.get("/getDateOfMonthValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                day: { $dayOfMonth: "$date" }
              }
        }
    ])
    response.send(data);
})

//$hour()
app.get("/getHourValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                hour: { $hour: "$date" }
              }
        }
    ])
    response.send(data);
})

//$minutes()

app.get("/getMinutesValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                minutes: { $minute: "$date" }
              }
        }
    ])
    response.send(data);
})

//$second()

app.get("/getSecondsValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                seconds: { $second: "$date" }
              }
        }
    ])
    response.send(data);
})

// $millisecond()

app.get("/getMilliSecondsValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                milliseconds: { $millisecond: "$date" }
              }
        }
    ])
    response.send(data);
})


//$dayOfYear()

app.get("/getDateOfYearValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                dayOfYear: { $dayOfYear: "$date" }
              }
        }
    ])
    response.send(data);
})

//$dayOfWeek()

app.get("/getDateOfWeekValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                dayOfWeek: { $dayOfWeek: "$date" }
              }
        }
    ])
    response.send(data);
})

//$week()

app.get("/getWeekValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                week: { $week: "$date" }
              }
        }
    ])
    response.send(data);
})

//$dateToString()

app.get("/getDateToStringValues",async (request,response)=>{
    const data = await dateModel.aggregate([
        {
            $project:{
                yearMonthDay: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                time: { $dateToString: { format: "%H:%M:%S:%L", date: "$date" } }
              }
        }
    ])
    response.send(data);
})


//$round()

// app.get("/getRoundValues",async (request,response)=>{
//     const data = await studentModel.aggregate([
//         {
//             $project:{ roundedValue: { $round: [ 4.678, 2 ] } }
//         }
//     ])
//     response.send(data);
// })


//
app.get("/getRoundValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $group:{ 
                _id:"$class",
                roundedValue:  {$avg:"$age"}
             }
        },
        {
            $project:{
                rounded:{
                    $round:["$roundedValue",2]
                }
            }
        }
       
    ])
    response.send(data);
})


////////////////////////////////////////////////////////////////////
///////////////////////Group Accumulator Operators/////////////////
//////////////////////////////////////////////////////////////////

//$sum()
app.get("/getSumValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $group:{ 
                _id:"$class",
                roundedValue:  {$sum:"$age"}
             }
        }
       
    ])
    response.send(data);
})

app.get("/getSumProjectValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $project:{ 
                _id:"$class",
                roundedValue:  {$sum:"$course_fee"}
             }
        }
       
    ])
    response.send(data);
})

//$avg()
app.get("/getAvgValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $group:{ 
                _id:"$class",
                roundedValue:  {$avg:"$course_fee"}
             }
        }
       
    ])
    response.send(data);
})

//$first()
app.get("/getFirstValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $group:{ 
                _id:"$class",
                firstName:  {$first:"$course_fee"}
             }
        }
       
    ])
    response.send(data);
})

//$last()
app.get("/getLastValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        {
            $group:{ 
                _id:"$class",
                firstName:  {$last:"$course_fee"}
             }
        }
       
    ])
    response.send(data);
})

//max()
app.get("/getMaxValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        
       {
           $group:{
               _id:"$class",
               m:{
                    $max:"$class"
                }
           }
       }
    ])
    response.send(data);
})

//min()
app.get("/getMinValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        
       {
           $group:{
               _id:"$class",
               m:{
                    $min:"$class"
                }
           }
       }
    ])
    response.send(data);
})

//push()
app.get("/getPushValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        
       {
           $group:{
               _id:"$class",
              details:{
                  $push:{name:"$student_name",age:"$age",fee:"$course_fee"}
              }
           }
       }
    ])
    response.send(data);
})

//$addtoset()
app.get("/getAddToSetValues",async (request,response)=>{
    const data = await studentModel.aggregate([
        
       {
           $group:{
               _id:"$section",
              details:{
                  $addToSet:{fee:"$class"}
              }
           }
       }
    ])
    response.send(data);
})




module.exports = app