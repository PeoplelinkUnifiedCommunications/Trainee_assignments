const express = require("express");
const mongoose = require("mongoose");

const classes = express();
classes.use(express.json());

const classSchema = new mongoose.Schema({
    class: { type: String, required: true },
    description: { type: String, required: true },
    teachersList: { type: Array, unique: true },
    studentsList: { type: Array, unique: true },
});

const classCollection = new mongoose.model("classes", classSchema);

classes.get("/getclasses", async (request, response) => {
    try {
        response.send(await classCollection.find());
    } catch (error) {
        response.send(error.message);
    }
});

classes.post("/createclass", async (request, response) => {
    const userData = await usersCollection.findOne({
        _id: request.body.userId,
    });
    if (userData !== null) {
        try {
            const classData = await classCollection.findOne({
                class: request.body.class,
            });
            if (classData !== null) {
                if (userData.roll === "teacher") {
                    await classCollection.updateOne(
                        { class: request.body.class },
                        {
                            $addToSet: { teachersList: request.body.userId },
                        }
                    );
                } else {
                    await classCollection.updateOne(
                        { class: request.body.class },
                        {
                            $addToSet: { studentsList: request.body.userId },
                        }
                    );
                }
            } else {
                if (userData.roll === "teacher") {
                    await classCollection.create({
                        class: request.body.class,
                        description: request.body.description,
                        teachersList: [request.body.userId],
                    });
                } else {
                    await classCollection.create({
                        class: request.body.class,
                        description: request.body.description,
                        studentsList: [request.body.userId],
                    });
                }
            }
            response.send(await classCollection.find());
        } catch (error) {
            response.send(error.message);
        }
    } else {
        response.send("User not existed in users database");
    }
});

module.exports = classes;
