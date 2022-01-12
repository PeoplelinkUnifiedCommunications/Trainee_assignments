const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const parkingData = require("./model");
const genSlots = require("./generatedSlots");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://localhost:27017/parking_data_database")
    .then(() => console.log("Db Connected..."))
    .catch((error) => console.log(error));

app.listen(9000, () => {
    console.log("Server Running at http://localhost:9000");
});

app.post("/genSlots", async (request, response) => {
    const { slots } = request.body;
    try {
        const newSlots = {
            slots,
        };
        await genSlots.replaceOne({}, newSlots);
        return response.json(await genSlots.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.post("/create", async (request, response) => {
    const { ownerName, registrationNumber, vehicleColor, slotNumber } =
        request.body;
    try {
        const newData = new parkingData({
            ownerName,
            registrationNumber,
            vehicleColor,
            slotNumber,
        });
        await newData.save();
        return response.json(await parkingData.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/", async (request, response) => {
    try {
        const allData = await parkingData.find();
        return response.json(allData);
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/get/:id", async (request, response) => {
    const id = request.params.id;
    try {
        const data = await parkingData.find({ _id: id });
        return response.json(data);
    } catch (error) {
        console.log(error.message);
    }
});

app.put("/update/:id", async (request, response) => {
    const id = request.params.id;
    const { ownerName, registrationNumber, vehicleColor, slotNumber } =
        request.body;
    try {
        const newData = {
            ownerName,
            registrationNumber,
            vehicleColor,
            slotNumber,
        };
        await parkingData.updateOne({ _id: id }, newData);
        return response.json("success update");
    } catch (error) {
        console.log(error.message);
    }
});

app.delete("/delete/:id", async (request, response) => {
    const id = request.params.id;
    await parkingData.deleteOne({ _id: id });
    response.send("deleted");
});

module.exports = app;
