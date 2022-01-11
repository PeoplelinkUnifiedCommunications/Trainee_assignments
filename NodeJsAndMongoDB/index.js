const express = require("express");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const db = async () => {
	await mongoose.connect("mongodb://localhost:27017/parkingLotData");
	console.log("db connected....");
	app.listen(3006, () =>
		console.log("Server running at http://localhost:3006")
	);
};

db().catch((err) => console.log(err));
const parkingSlotSchema = new Schema({
	slotNum: Number,
	ownerName: String,
	registrationNumber: String,
	color: String,
	carOrBike: String,
});
const parkingSlotModel = mongoose.model("ParkingSlot", parkingSlotSchema);
app.post("/addSlot/", async (request, response) => {
	const { slotNum, ownerName, registrationNumber, color, carOrBike } =
		request.body;

	const addingData = new parkingSlotModel({
		slotNum: slotNum,
		ownerName: ownerName,
		registrationNumber: registrationNumber,
		color: color,
		carOrBike: carOrBike,
	});
	await addingData.save();
	response.send("slot successfully created");
});

app.get("/getSlotData/", async (req, res) => {
	const getResult = await parkingSlotModel.find();
	res.send(getResult);
});

app.delete("/deleteSlot/:slotNum/", async (req, res) => {
	const { slotNum } = req.params;
	const deleteData = await parkingSlotModel.deleteOne({ slotNum: slotNum });
	res.send("Deleted");
});

app.put("/updateSlot/:slotNumber/", async (req, res) => {
	const { slotNumber } = req.params;
	const { slotNum, ownerName, registrationNumber, color, carOrBike } = req.body;
	const updateData = await parkingSlotModel.updateOne(
		{ slotNum: slotNumber },
		{
			$set: {
				slotNum: slotNum,
				ownerName: ownerName,
				registrationNumber: registrationNumber,
				color: color,
				carOrBike: carOrBike,
			},
		}
	);
	res.send("updated");
});

app.get("/getDateSlot/:slotNum/", async (req, res) => {
	const { slotNum } = req.params;
	const getEachResult = await parkingSlotModel.findOne({ slotNum: slotNum });
	res.send(getEachResult);
});

module.exports = app;
