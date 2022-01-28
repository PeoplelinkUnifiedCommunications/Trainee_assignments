const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = async () => {
    try {
        await mongoose
            .connect("mongodb://localhost:27017/school")
            .then(() => {
                console.log("DB Connected...!!!");
                app.listen(9000, () =>
                    console.log("Server running on 9000...!!!")
                );
            })
            .catch((error) => console.log(error.message));
    } catch (error) {
        console.log(error.message);
    }
};

db();

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    roll: { type: String, required: true },
});

const usersCollection = mongoose.model("users", userSchema);

app.post("/createuser", async (request, response) => {
    const { roll } = request.body;
    try {
        if (
            roll.toLowerCase() === "student" ||
            roll.toLowerCase() === "teacher"
        ) {
            await usersCollection.create(request.body);
            response.send(await usersCollection.find());
        } else {
            response.send("Please provide proper roll");
        }
    } catch (error) {
        response.send(error.message);
    }
});

app.post("/addfield", async (request, response) => {
    try {
        await usersCollection.aggregate([{ $addFields: { gender: "Male" } }]);
        response.send(await usersCollection.find());
    } catch (error) {
        response.send(error.message);
    }
});

app.get("/getusers", async (request, response) => {
    try {
        response.send(await usersCollection.find());
    } catch (error) {
        response.send(error.message);
    }
});

app.put("/updateuser", async (request, response) => {
    try {
        await usersCollection.updateOne(
            { _id: request.body._id },
            request.body
        );
        response.send(await usersCollection.find());
    } catch (error) {
        response.send(error.message);
    }
});

app.post("/deleteuser", async (request, response) => {
    try {
        await usersCollection.findOneAndDelete({ _id: request.body._id });
        response.send(await usersCollection.find());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

const classSchema = new mongoose.Schema({
    class: { type: String, required: true },
    description: { type: String, required: true },
    teachersList: { type: Array, unique: true },
    studentsList: { type: Array, unique: true },
});

const classCollection = new mongoose.model("classes", classSchema);

app.get("/getclasses", async (request, response) => {
    try {
        response.send(await classCollection.find());
    } catch (error) {
        response.send(error.message);
    }
});

// app.post("/createclass", async (request, response) => {
//     const userData = await usersCollection.findOne({
//         _id: request.body.userId,
//     });
//     const userRoll = userData.roll;
//     if (userData !== null) {
//         try {
//             const classData = await classCollection.findOne({
//                 class: request.body.class,
//             });
//             if (classData !== null) {
//                 await classCollection.updateOne(
//                     { class: request.body.class },
//                     {
//                         $cond: [
//                             { $eq: ["$userRoll", "teacher"] },
//                             {
//                                 teachersList: request.body.userId,
//                             },
//                             {
//                                 studentsList: request.body.userId,
//                             },
//                         ],
//                     }
//                 );
//             } else {
//                 if (userData.roll === "teacher") {
//                     await classCollection.create({
//                         class: request.body.class,
//                         description: request.body.description,
//                         teachersList: [request.body.userId],
//                     });
//                 } else {
//                     await classCollection.create({
//                         class: request.body.class,
//                         description: request.body.description,
//                         studentsList: [request.body.userId],
//                     });
//                 }
//             }
//             response.send(await classCollection.find());
//         } catch (error) {
//             response.send(error.message);
//         }
//     } else {
//         response.send("User not existed in users database");
//     }
// });

// app.post("/makeclass", async (request, response) => {
//     const userData = await usersCollection.findOne({
//         _id: request.body.userId,
//     });
//     const userRoll = userData.roll;
//     if (userData !== null) {
//         try {
//             await classCollection.updateOne(
//                 { class: request.body.class },
//                 {
//                     $cond: {
//                         if: { "$userData.roll": { $eq: "teacher" } },
//                         then: console.log("siva"),
//                         // {
//                         //     $addToSet: {teachersList: request.body.userId},
//                         // },
//                         else: console.log("ch"),
//                         // {
//                         //     $addToSet: {studentsList: request.body.userId},
//                         // },
//                     },
//                 },
//                 { upsert: true }
//             );
//             response.send(await classCollection.find());
//         } catch (error) {
//             response.send(error.message);
//         }
//     } else {
//         response.send("User not existed in users database");
//     }
// });

// app.post("/makeclass", async (request, response) => {
//     const userData = await usersCollection.findOne({
//         _id: request.body.userId,
//     });
//     const userRoll = userData.roll;
//     if (userData !== null) {
//         try {
//             await classCollection.updateOne(
//                 { class: request.body.class },
//                 {
//                     $switch: {
//                         branches: [
//                             {
//                                 case: { $eq: [userRoll, "teacher"] },
//                                 then: {
//                                     $addToSet: {
//                                         teachersList: request.body.userId,
//                                     },
//                                 },
//                             },
//                             {
//                                 case: { $eq: [userRoll, "student"] },
//                                 then: {
//                                     $addToSet: {
//                                         studentsList: request.body.userId,
//                                     },
//                                 },
//                             },
//                         ],
//                     },
//                 },
//                 { upsert: true }
//             );
//             response.send(await classCollection.find());
//         } catch (error) {
//             response.send(error.message);
//         }
//     } else {
//         response.send("User not existed in users database");
//     }
// });

app.post("/makeclass", async (request, response) => {
    const userData = await usersCollection.findOne({
        _id: request.body.userId,
    });
    if (userData !== null) {
        try {
            if (userData.roll === "teacher") {
                await classCollection.updateOne(
                    { class: request.body.class },
                    {
                        $addToSet: { teachersList: userData._id },
                    },
                    { upsert: true }
                );
            } else {
                await classCollection.updateOne(
                    { class: request.body.class },
                    {
                        $addToSet: { studentsList: userData._id },
                    },
                    { upsert: true }
                );
            }
            response.send(await classCollection.find());
        } catch (error) {
            response.send(error.message);
        }
    } else {
        response.send("User not existed in users database");
    }
});

app.get("/userclasses/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const data = await classCollection.aggregate([
            {
                $match: { $or: [{ studentsList: id }, { teachersList: id }] },
            },
            {
                $project: { _id: 0, class: 1 },
            },
        ]);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

module.exports = app;
