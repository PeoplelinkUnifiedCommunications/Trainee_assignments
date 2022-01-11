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

app.put("/genSlots", async (request, response) => {
    const { slots } = request.body;
    try {
        const newSlots = genSlots({
            slots,
        });
        await newSlots.save();
        return response.send(await genSlots.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/", async (request, response) => {
    try {
        const allData = await parkingData.find();
        return response.send(allData);
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
        return response.send(await parkingData.find());
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = app;
