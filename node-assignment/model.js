const mongoose = require("mongoose");

const dataType = { type: String, required: true };

const parkingData = mongoose.Schema({
    ownerName: dataType,
    registrationNumber: dataType,
    vehicleColor: dataType,
    slotNumber: { type: Number, required: true },
});

module.exports = mongoose.model("Parking_data", parkingData);
