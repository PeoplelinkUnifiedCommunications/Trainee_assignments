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
    date_of_joining: String,
    age: Number,
    weight: Number,
});

const studentCollection = mongoose.model("studentsdatas", studentSchema);

app.post("/students/", async (request, response) => {
    try {
        await studentCollection.insertMany(request.body);
        response.send(await studentCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/noofstudents/", async (request, response) => {
    try {
        response.send(await studentCollection.find().count());
    } catch (error) {
        console.log(error.message);
    }
});
module.exports = app;
