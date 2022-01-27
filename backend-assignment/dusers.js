const express = require("express");
const mongoose = require("mongoose");

const users = express();
users.use(express.json());

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    roll: { type: String, required: true },
});

const usersCollection = mongoose.model("users", userSchema);

users.post("/createuser", async (request, response) => {
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

users.get("/getusers", async (request, response) => {
    try {
        response.send(await usersCollection.find());
    } catch (error) {
        response.send(error.message);
    }
});

users.put("/updateuser", async (request, response) => {
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

users.post("/deleteuser", async (request, response) => {
    try {
        await usersCollection.findOneAndDelete({ _id: request.body._id });
        response.send(await usersCollection.find());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

module.exports = users;
