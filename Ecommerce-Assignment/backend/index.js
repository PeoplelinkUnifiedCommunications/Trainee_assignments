const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = async () => {
    try {
        await mongoose
            .connect("mongodb://localhost:27017/Ecommerce")
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
    name: String,
    email: String,
    password: String,
});

const userDataCollection = mongoose.model("userDatabase", userSchema);

app.post("/signup/", async (request, response) => {
    const { name, email, password } = request.body;
    try {
        const data = await userDataCollection.findOne({ email });
        if (data === null) {
            await userDataCollection.create(request.body);
            response.status(200).send(await userDataCollection.find());
        } else {
            response.status(400).send("User already exists");
        }
    } catch (error) {
        console.log(error.message);
    }
});

app.post("/signin/", async (request, response) => {
    const { name, email, password } = request.body;
    try {
        const data = await userDataCollection.findOne({ email });
        //console.log(data);
        if (data === null) {
            //response.send({ status: 404, message: "Email not found" });
            response.statusCode = 400;
            response.send(data);
        } else {
            if (password === data.password) {
                response.status(200).send("Login success");
            } else {
                response.status(400).send("Password wrong");
            }
        }
    } catch (error) {
        //response.status(400).send(error.message);
        response.statusCode = 404;
        response.send(data);
    }
});

module.exports = app;
