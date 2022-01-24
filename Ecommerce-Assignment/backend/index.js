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

const productSchema = mongoose.Schema({
    productName: String,
    price: Number,
    url: String,
    quantity: Number,
    description: String,
});

const cartSchema = mongoose.Schema({
    productName: String,
    price: Number,
    url: String,
    quantity: Number,
});

const userDataCollection = mongoose.model("userDatabase", userSchema);

const productCollection = mongoose.model("productDatabase", productSchema);

const cartCollection = mongoose.model("cartproducts", cartSchema);

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
            response.statusCode = 400;
            response.send({ status: 400, message: "Email not found" });
        } else {
            if (password === data.password) {
                response.status(200).send("Login successfull");
            } else {
                response.status(400).send("Password wrong");
            }
        }
    } catch (error) {
        response.status(404).send(error.message);
    }
});

app.post("/createproduct/", async (request, response) => {
    try {
        await productCollection.create(request.body);
        response.status(200).send(await productCollection.find());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.get("/getproducts", async (request, response) => {
    try {
        response.send(await productCollection.find());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.post("/addtocart/", async (request, response) => {
    try {
        await cartCollection.create(request.body);
        response.status(200).send(await cartCollection.find());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.get("/getcartproducts", async (request, response) => {
    try {
        response.send(await cartCollection.find());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

module.exports = app;
