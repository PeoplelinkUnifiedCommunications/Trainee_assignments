const { request, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

const db = async () => {
	await mongoose.connect(
		"mongodb+srv://durga:gdp85863@sandbox.hrnke.mongodb.net/sampledata?retryWrites=true&w=majority"
	);
	console.log("db connected..!");
};

db();

const userSchema = new mongoose.Schema({
	id: String,
	ownerName: String,
	regNumber: String,
	vehicleColor: String,
	slotNumber: String,
});

const Userdata = mongoose.model("Userdata", userSchema);

//  inserting data //

app.post("/postdata", async (request, response) => {
	console.log(request.body);
	try {
		const addData = new Userdata(request.body);
		const result = await addData.save();
		response.send("done");
		console.log(result);
	} catch (e) {
		response.send(e);
	}
});

// getting data //
app.get("/", async (request, response) => {
	try {
		const getData = await Userdata.find();
		response.send(getData);
	} catch (e) {
		response.send(e);
	}
});

// updatingData //
app.put("/update/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const updateData = await Userdata.updateOne(
			{ id: id },
			{
				$set: request.body,
			}
		);
		response.send(updateData);
	} catch (e) {
		response.send(e);
	}
});

// deleting data //
app.delete("/delete/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const deleteData = await Userdata.deleteOne({ id: id });
		response.send(deleteData);
	} catch (e) {
		response.send(e);
	}
});

app.listen(3005, () => console.log("Server started on 3005"));
