const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const path = require("path");
const { response } = require("express");

const dbPath = path.join(__dirname, "parkingLotData.db");
let db = null;
const initializerDBAndServer = async () => {
	try {
		db = await open({
			filename: dbPath,
			driver: sqlite3.Database,
		});
		app.listen(3004, () => {
			console.log("Server Started at http://localhost:3004/");
		});
	} catch (e) {
		console.log(`DB Error:${e.message}`);
		process.exit(1);
	}
};
initializerDBAndServer();

app.post("/addSlot/", async (request, response) => {
	const { id, ownerName, registrationNumber, color, slotNum, carOrBike } =
		request.body;
	const addSlotQuery = `INSERT INTO ParkingLotData (id,ownerName,registrationNumber,color,slotNum,carOrBike) VALUES("${id}","${ownerName}","${registrationNumber}","${color}",${slotNum},"${carOrBike}");`;
	await db.run(addSlotQuery);
	response.send("slot successfully created");
});

app.get("/getSlots/", async (request, response) => {
	const getSlotQuery = `SELECT * FROM ParkingLotData`;
	const data = await db.all(getSlotQuery);

	const updatedData = data.map((each) => ({
		id: each.id,
		slotNumber: each.sl_no,
		regNumber: each.reg_number,
		ownerName: each.owner_name,
		color: each.color,
	}));
	response.send(data);
});

app.delete("/deleteSlot/:slotNum/", async (request, response) => {
	const { slotNum } = request.params;

	const deleteSlotQuery = `DELETE FROM ParkingLotData WHERE slotNum=${slotNum}`;
	await db.run(deleteSlotQuery);
	response.send("slot removed");
});

app.put("/updateSlot/:slotNumber", async (request, response) => {
	const { slotNumber } = request.params;
	const updateData = request.body;
	const { id, ownerName, registrationNumber, color, slotNum, carOrBike } =
		updateData;
	const updatedSlotQuery = `UPDATE ParkingLotData SET id="${id}",ownerName="${ownerName}",registrationNumber="${registrationNumber}",color="${color}",slotNum="${slotNum}",carOrBike="${carOrBike}"  WHERE slotNum=${slotNumber}`;
	await db.run(updatedSlotQuery);
	response.send("Slot Data Updated");
});

app.get("/getSlots/:slotNumber2/", async (request, response) => {
	const { slotNumber2 } = request.params;
	const getEditSlot = `SELECT * FROM ParkingLotData WHERE slotNum=${slotNumber2}`;
	const getData = await db.all(getEditSlot);
	response.send(getData);
});

module.exports = app;
