const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = async () => {
    try {
        await mongoose
            .connect(
                "mongodb+srv://siva:siva1991@sivacluster.xxes8.mongodb.net/studentDatabase?retryWrites=true&w=majority"
            )
            .then(() => {
                console.log("DB Connected...!!!");
                app.listen(9090, () => console.log("Server Running"));
            })
            .catch((error) => console.log(error.message));
    } catch (error) {
        console.log(error.message);
    }
};

db();

const studentSchema = new mongoose.Schema({
    student_name: String,
    class: Number,
    section: String,
    subjects: Array,
    course_fee: Number,
    date_of_joining: { type: Date, default: Date.now },
    age: Number,
    weight: Number,
});

const studentMarksSchema = new mongoose.Schema({
    name: String,
    marks: Number,
    age: Number,
});

const setSchema = new mongoose.Schema({
    A: Array,
    B: Array,
});

const studentCollection = mongoose.model("studentsdatas", studentSchema);
const studentMarksCollection = mongoose.model(
    "studentsMarks",
    studentMarksSchema
);

const setOperatorCollection = mongoose.model("setoperators", setSchema);

app.post("/students/", async (request, response) => {
    try {
        await studentCollection.insertMany(request.body);
        response.send(await studentCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.post("/studentsmarks/", async (request, response) => {
    try {
        await studentMarksCollection.insertMany(request.body);
        response.send(await studentMarksCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.post("/setoperators/", async (request, response) => {
    try {
        await setOperatorCollection.insertMany(request.body);
        response.send(await setOperatorCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

//get data
app.get("/getstudentsdata/", async (request, response) => {
    try {
        response.send(await studentCollection.aggregate().count("no:"));
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/studentsdata/", async (request, response) => {
    try {
        response.send(await studentCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

// get all students names
app.get("/studentnames/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: { student_name: 1, _id: 0 },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

// match

app.get("/students%20data%20age%20greathan/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $match: { age: { $gte: 13 } },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//asyncIterator()
app.get("/students%20names%20age%20greaterthan/", async (request, response) => {
    try {
        const names = studentCollection.aggregate([
            {
                $match: { age: { $gte: 13 } },
            },
        ]);
        for await (let name of names) {
            console.log(name.student_name);
        }
    } catch (error) {
        console.log(error.message);
    }
});

// student_names and age where students age greaterthan
app.get("/studentnamesandagegreaterthan/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                { $match: { age: { $gte: 13 } } },
                {
                    $project: {
                        student_name: 1,
                        age: 1,
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

// student_names and age where students age greaterthan in section A
app.get(
    "/studentnamesandagegreaterthaninsectionA/",
    async (request, response) => {
        try {
            response.send(
                await studentCollection.aggregate([
                    { $match: { age: { $gte: 13 }, section: { $eq: "A" } } },
                    {
                        $project: {
                            student_name: 1,
                            age: 1,
                            _id: 0,
                        },
                    },
                ])
            );
        } catch (error) {
            console.log(error.message);
        }
    }
);

// addField
app.get("/addField/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate.addFields({
                newField: "$b.roll_number",
                plusTen: { $add: ["$val", 10] },
                sub: {
                    student_name: "$a",
                },
            })
        );
    } catch (error) {
        console.log(error.message);
    }
});

// allowDiskuse()
app.get("/diskuse/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate([
                    { $match: { age: { $gte: 13 } } },
                    {
                        $project: {
                            student_name: 1,
                            age: 1,
                            _id: 0,
                        },
                    },
                ])
                .allowDiskUse(true)
        );
    } catch (error) {
        console.log(error.message);
    }
});

//append()
app.get("/append/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate.append(
                { $match: { age: { $gte: 13 } } },
                {
                    $project: {
                        student_name: 1,
                        age: 1,
                        _id: 0,
                    },
                }
            )
        );
    } catch (error) {
        console.log(error.message);
    }
});

//collation()
app.get("/collation/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate([
                    { $match: { age: { $gte: 13 } } },
                    {
                        $project: {
                            student_name: 1,
                            age: 1,
                            _id: 0,
                        },
                    },
                ])
                .collation({ locale: "en_US", strength: 1 })
        );
    } catch (error) {
        console.log(error.message);
    }
});

//count()
app.get("/count/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate([
                    { $match: { age: { $gte: 13 } } },
                    {
                        $project: {
                            student_name: 1,
                            age: 1,
                            _id: 0,
                        },
                    },
                ])
                .count("student_count")
        );
    } catch (error) {
        console.log(error.message);
    }
});

//exec()
app.get("/exec/", async (request, response) => {
    try {
        const callFunction = () => {
            return [
                { $match: { age: { $gte: 13 } } },
                {
                    $project: {
                        student_name: 1,
                        age: 1,
                        _id: 0,
                    },
                },
            ];
        };
        const promise = await studentCollection.aggregate().exec(callFunction);
        response.send(promise.then());
    } catch (error) {
        console.log(error.message);
    }
});

//facet()
app.get("/facet/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate().facet({
                students: [{ groupBy: "$student_name" }],
                age: [{ $bucketAuto: { groupBy: "$age", buckets: 2 } }],
            })
        );
    } catch (error) {
        console.log(error.message);
    }
});

//group()
app.get("/group/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate().group({ _id: "$student_name" })
        );
    } catch (error) {
        console.log(error.message);
    }
});

//limit()
app.get("/limit/", async (request, response) => {
    try {
        response.send(await studentCollection.aggregate().limit(2));
    } catch (error) {
        console.log(error.message);
    }
});

//match()
app.get("/match/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate()
                .match({ student_name: { $in: [/siva/] } })
        );
    } catch (error) {
        console.log(error.message);
    }
});

//pipeline()
app.get("/pipeline/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate()
                .match({ student_name: { $in: ["siva", "tanvi"] } })
                .pipeline()
        );
    } catch (error) {
        console.log(error.message);
    }
});

//project()
app.get("/project/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate().project("student_name age -_id")
        );
    } catch (error) {
        console.log(error.message);
    }
});

// app.get("/projectavg/", async (request, response) => {
//     try {
//         response.send(
//             await studentCollection
//                 .aggregate()
//                 .project({ avg: { $avg: "age" } })
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });

//sample() -- gives ramdom no of documents
app.get("/sample/", async (request, response) => {
    try {
        response.send(await studentCollection.aggregate().sample(2));
    } catch (error) {
        console.log(error.message);
    }
});

//search()
app.get("/search/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate()
                .search({ student_name: { query: "siva" } })
        );
    } catch (error) {
        console.log(error.message);
    }
});

//skip()
app.get("/skip/", async (request, response) => {
    try {
        response.send(await studentCollection.aggregate().skip(10));
    } catch (error) {
        console.log(error.message);
    }
});

//sort()
app.get("/sort/", async (request, response) => {
    try {
        response.send(
            await studentCollection
                .aggregate([
                    { $match: { age: { $gte: 13 } } },
                    {
                        $project: {
                            student_name: 1,
                            age: 1,
                            _id: 0,
                        },
                    },
                ])
                .sort("age -student_name")
        );
    } catch (error) {
        console.log(error.message);
    }
});

//sortByCount()
app.get("/sortbycount/", async (request, response) => {
    try {
        response.send(await studentCollection.aggregate().sortByCount("age"));
    } catch (error) {
        console.log(error.message);
    }
});

//unwind()
app.get("/unwind/", async (request, response) => {
    try {
        response.send(await studentCollection.aggregate().unwind("class"));
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/unwindmulti/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate().unwind("student_name", "weight")
        );
    } catch (error) {
        console.log(error.message);
    }
});

//Displaying the total number of students in one class only
app.get("/totalstudents/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                { $match: { class: 10, section: "A" } },
                { $count: "Total students" },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//Displaying the total number of students in both the sections and maximum and minimum age from both section
app.get("/totalstudentseachclasswithmaxage/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        total_students: { $sum: 1 },
                        max_age: { $max: "$age" },
                        min_age: { $min: "$age" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//Displaying details of a students having the largest age in the class
// app.get("/studentwithmaxage/", async (request, response) => {
//     try {
//         response.send(
//             await studentCollection.aggregate([
//                 { $group: { _id: "$class" } },
//                 { $sort: { age: -1 } },
//                 { $limit: 1 },
//             ])
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });

//distinct
app.get("/distinctnames/", async (request, response) => {
    try {
        response.send(await studentCollection.distinct("student_name"));
    } catch (error) {
        console.log(error.message);
    }
});

//lookup
app.get("/lookup/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $lookup: {
                        from: "studentsdatas",
                        localField: "name",
                        foreignField: "student_name",
                        as: "student_details",
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//and operator
app.get("/andoperator/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $match: {
                        $and: [
                            { class: 10 },
                            { section: "A" },
                            { weight: { $lte: 35 } },
                        ],
                    },
                },
                {
                    $project: {
                        student_name: 1,
                        class: 1,
                        section: 1,
                        weight: 1,
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//or operator
app.get("/oroperator/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $match: {
                        $or: [
                            { class: 10 },
                            { section: "A" },
                            { weight: { $lte: 35 } },
                        ],
                    },
                },
                {
                    $project: {
                        student_name: 1,
                        class: 1,
                        section: 1,
                        weight: 1,
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//not operator
app.get("/notoperator/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $match: {
                        $or: [
                            { class: 10 },
                            { section: "A" },
                            { weight: { $lte: 35 } },
                        ],
                        $not: [{ section: "B" }],
                    },
                },
                {
                    $project: {
                        student_name: 1,
                        class: 1,
                        section: 1,
                        weight: 1,
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//setequals
app.get("/setequals/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        B: 1,
                        haveSameDistinctElements: { $setEquals: ["$A", "$B"] },
                        _id: 0,
                    },
                },
                { $match: { haveSameDistinctElements: true } },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//setintersection
app.get("/setintersection/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        B: 1,
                        commonDistinctElements: {
                            $setIntersection: ["$A", "$B"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//setunion
app.get("/setunion/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        B: 1,
                        allDistinctElements: {
                            $setUnion: ["$A", "$B"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//setdifference
app.get("/setdifference/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        B: 1,
                        elementsInBonly: {
                            $setDifference: ["$B", "$A"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//setissubset
app.get("/setissubset/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        B: 1,
                        isSubset: {
                            $setIsSubset: ["$A", "$B"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//anyelementtrue
app.get("/anyelementtrue/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        isanytrue: {
                            $anyElementTrue: ["$A"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//allelementstrue
app.get("/allelementstrue/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        A: 1,
                        isalltrue: {
                            $allElementsTrue: ["$A"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//arithametic operators
//absolute
app.get("/absolute/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        delta: {
                            $abs: { $subtract: ["$marks", 123] },
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//add
app.get("/add/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        addmarks: {
                            $add: ["$marks", 5],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//ceil
app.get("/ceil/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection
                .aggregate([
                    {
                        $project: {
                            ceilingValue: {
                                $ceil: [5 / 2],
                            },
                            _id: 0,
                        },
                    },
                ])
                .limit(1)
        );
    } catch (error) {
        console.log(error.message);
    }
});

//divide
app.get("/divide/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection
                .aggregate([
                    {
                        $project: {
                            ceilingValue: {
                                $ceil: { $divide: [5, 6] },
                            },
                            _id: 0,
                        },
                    },
                ])
                .limit(1)
        );
    } catch (error) {
        console.log(error.message);
    }
});

//floor
app.get("/floor/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection
                .aggregate([
                    {
                        $project: {
                            floorValue: {
                                $floor: { $divide: [6, 4] },
                            },
                            _id: 0,
                        },
                    },
                ])
                .limit(1)
        );
    } catch (error) {
        console.log(error.message);
    }
});

//logarithm
app.get("/logarithm/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        logValue: {
                            $ln: ["$marks"], //$ln is equivalent to $log: [ <number>, Math.E ] expression, where Math.E is a JavaScript representation for Euler’s number e.
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//logarithm
app.get("/log/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        logValue: {
                            $log: ["$marks", 2],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//mod
app.get("/mod/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        remainder: {
                            $mod: ["$marks", 2],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//multiply
app.get("/multiply/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        multiply: {
                            $multiply: ["$marks", 10],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//power
app.get("/power/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        powerValue: {
                            $pow: ["$marks", 2],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//squareroot
app.get("/sqrt/", async (request, response) => {
    try {
        response.send(
            await studentMarksCollection.aggregate([
                {
                    $project: {
                        squareroot: {
                            $sqrt: "$marks",
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//string Aggregations
//concat
app.get("/concat/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        classwithsection: {
                            $concat: [{ $toString: "$class" }, "-", "$section"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//substring
app.get("/substr/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        substring: {
                            $substr: ["$student_name", 0, 3],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//tolower and toupper
app.get("/lowerandupper/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        lower: {
                            $toLower: "$student_name",
                        },
                        upper: {
                            $toUpper: "$student_name",
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//string case comparision
app.get("/strcasecmp/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        student_name: 1,
                        stringcomparision: {
                            $strcasecmp: ["$student_name", "SIva"],
                        },
                        _id: 0,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//pipeline aggregation stages
//redact
app.get("/redact/", async (request, response) => {
    const inputSubjects = ["Telugu", "Science"];
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $redact: {
                        $cond: {
                            if: {
                                $gt: [
                                    {
                                        $size: {
                                            $setIntersection: [
                                                "$subjects",
                                                inputSubjects,
                                            ],
                                        },
                                    },
                                    0,
                                ],
                            },
                            then: "$$DESCEND",
                            else: "$$PRUNE",
                        },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//unwind
app.get("/getunwind/", async (req, res) => {
    try {
        const unwind = await studentCollection.aggregate([
            {
                $match: { student_name: "siva" },
            },
            {
                $unwind: "$subjects",
            },
        ]);
        res.send(unwind);
    } catch (error) {
        console.log(error.message);
    }
});

//group
app.get("/getgroup/", async (req, res) => {
    const group = await studentCollection.aggregate([
        {
            $group: { _id: null, totalFees: { $sum: "$course_fee" } },
        },
    ]);
    res.send(group);
});

//sample
app.get("/sample/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $sample: {
                        size: 2,
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//out aggregation
app.get("/out/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        students: { $push: "$student_name" },
                    },
                },
                { $out: "classStudents" },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

// Array Aggregation Operators
//arrayElemAt
app.get("/arrayelemat/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        first_subject: { $arrayElemAt: ["$subjects", 0] },
                        last_subject: { $arrayElemAt: ["$subjects", -1] },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//array concat
app.get("/arrayconcat/", async (request, response) => {
    try {
        response.send(
            await setOperatorCollection.aggregate([
                {
                    $project: {
                        allColors: { $concatArrays: ["$A", "$B"] },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//array filter
app.get("/arrayfilter/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        subjects: {
                            $filter: {
                                input: "$subjects",
                                as: "subject",
                                cond: {
                                    $eq: ["$$subject", "English"],
                                },
                            },
                        },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//isArray
app.get("/isarray/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        subjectsIsArray: { $isArray: "$subjects" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//-------------
// app.get("/isarray/", async (request, response) => {
//     try {
//         response.send(
//             await studentCollection.aggregate([
//                 {
//                     $project: {
//                         subjectsIsArray: {
//                             $cond: {
//                                 if: { $isArray: "$subjects" },
//                                 then: {
//                                     $filter: {
//                                         input: "$subjects",
//                                         as: "subject",
//                                         cond: {
//                                             $concat: [
//                                                 "All subjects are: ",
//                                                 "$$subject",
//                                             ],
//                                         },
//                                     },
//                                 },
//                                 else: "Subjects array not available",
//                             },
//                         },
//                     },
//                 },
//             ])
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });

//----------

// app.get("/isarray/", async (request, response) => {
//     try {
//         response.send(
//             await studentCollection.aggregate([
//                 {
//                     $project: {
//                         subjectsIsArray: {
//                             $concat: [
//                                 "All subjects are: ",
//                                 {
//                                     $cond: {
//                                         if: { $isArray: "$subjects" },
//                                         then: {
//                                             $filter: {
//                                                 input: "$subjects",
//                                                 as: "subject",
//                                                 cond: {},
//                                             },
//                                         },
//                                         else: "Subjects array not available",
//                                     },
//                                 },
//                             ],
//                         },
//                     },
//                 },
//             ])
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });

//array size
app.get("/arraysize/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        noOfSubjects: { $size: "$subjects" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//slice
app.get("/arrayslice/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        sliceOfArray: { $slice: ["$subjects", 0, 2] },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//date format aggregations
app.get("/dateformats/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        student_name: 1,
                        class: 1,
                        section: 1,
                        date_of_joining: 1,
                        year: { $year: "$date_of_joining" },
                        month: { $month: "$date_of_joining" },
                        day: { $dayOfMonth: "$date_of_joining" },
                        hour: { $hour: "$date_of_joining" },
                        minutes: { $minute: "$date_of_joining" },
                        seconds: { $second: "$date_of_joining" },
                        milliseconds: { $millisecond: "$date_of_joining" },
                        dayOfYear: { $dayOfYear: "$date_of_joining" },
                        dayOfWeek: { $dayOfWeek: "$date_of_joining" },
                        week: { $week: "$date_of_joining" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//date to string format
app.get("/datetostring/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        date_of_joining: 1,
                        date_in_string_format: {
                            $dateToString: {
                                format: "%d-%m-%Y",
                                date: "$date_of_joining",
                            },
                        },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//group accumulator operator
//sum
app.get("/sum/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        totalWeightOfClass: { $sum: "$weight" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//average
app.get("/avg/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        averageAgeOfClass: { $avg: "$age" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//rounding average
app.get("/roundingavg/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        averageAgeOfClass: { $avg: "$age" },
                    },
                },
                {
                    $project: {
                        roundAvg: { $round: ["$averageAgeOfClass", 2] },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

// //rounding
// app.get("/roundingavg/", async (request, response) => {
//     try {
//         response.send(
//             await studentCollection.aggregate([
//                 {
//                     $project: {
//                         round: {
//                             $round: [2.52345, 2],
//                         },
//                     },
//                 },
//             ])
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });

//first
app.get("/first/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                { $sort: { date_of_joining: -1 } },
                {
                    $group: {
                        _id: "$class",
                        firstPersonJoiningDate: { $first: "$date_of_joining" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//last
app.get("/last/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                { $sort: { date_of_joining: -1 } },
                {
                    $group: {
                        _id: "$class",
                        lastPersonJoiningDate: { $last: "$date_of_joining" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//max
app.get("/max/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        count: { $sum: 1 },
                    },
                },
                {
                    $group: {
                        _id: "$class",
                        max_count: { $max: "$count" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

// app.get("/max/", async (request, response) => {
//     try {
//         response.send(
//             await studentCollection.aggregate([
//                 {
//                     $group: {
//                         _id: "$class",
//                         count: { $sum: 1 },
//                     },
//                 },
//                 {
//                     $group: {
//                         _id: "$class",
//                         max_count: { $max: "$count" },
//                     },
//                 },
//                 {
//                     $project: {
//                         class: 1,
//                         max: { $eq: ["$max_count", { $max: "$count" }] },
//                     },
//                 },
//             ])
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });

//min
app.get("/min/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        count: { $sum: 1 },
                    },
                },
                {
                    $group: {
                        _id: "$class",
                        min_count: { $min: "$count" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//push
app.get("/push/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        names: { $push: "$student_name" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//addtoset
app.get("/addtoset/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $group: {
                        _id: "$class",
                        names: { $addToSet: "$student_name" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

//map
app.get("/map/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        all_subjects: {
                            $map: {
                                input: "$subjects",
                                as: "subject",
                                in: {
                                    $concat: ["$$subject", " subjects"],
                                },
                            },
                        },
                        concated: { $concatArrays: ["$subjects", "$subjects"] },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = app;
