const express = require("express");

const mongoose = require("mongoose");

const { Schema } = mongoose;

const app = express();

app.use(express.json());

let data;

const db = async () => {
	try {
		data = await mongoose.connect(
			"mongodb+srv://Harish:Hari997@cluster0.ledtb.mongodb.net/aggeregationPractice?retryWrites=true&w=majority"
		);
		console.log("db connected....");
		app.listen(4000, () => {
			console.log("Server running at http://localhost:4000");
		});
	} catch (error) {
		console.log(error.massage);
	}
};

db();

const studentSchema = new Schema({
	student_name: String,
	age: Number,
	date_of_birth: String,
	course: String,
	section: String,
	course_fee: Number,
	subjects: Array,
	date_of_joining_year: Number,
	weight: Number,
});

const studentMarksDeatils = new Schema({
	name: String,
	marks: Number,
	status: String,
});

const studentClassDEatilsSchema = new Schema({
	student_name: String,
	section: String,
	course: String,
});

const studentSchemaModel = mongoose.model("studentData", studentSchema);
const studentDetailsModel = mongoose.model("studentMarks", studentMarksDeatils);
const studentClassDEatilsModel = mongoose.model(
	"studentClassDEatils",
	studentClassDEatilsSchema
);

app.get("/getData/", async (req, res) => {
	const getData = await studentSchemaModel.find();
	res.send(getData);
});

app.get("/getStudentsMechanicalASection/", async (req, res) => {
	const getStudentsMechanicalASection = await studentSchemaModel.aggregate([
		{
			$match: {
				$and: [
					{ course: "Mechanical" },
					{ section: "A" },
					{ weight: { $gte: 59, $lte: 62 } },
				],
			},
		},
		{ $project: { student_name: 1, course: 1, section: 1, weight: 1, _id: 0 } },
	]);
	res.send(getStudentsMechanicalASection);
});

app.get("/getStudentsMechOrComputers/", async (req, res) => {
	const getStudentsMechOrComputers = await studentSchemaModel.aggregate([
		{
			$match: {
				$or: [{ course: "Mechanical" }, { course: "Computers" }],
			},
		},
		{ $project: { student_name: 1, course: 1, section: 1, _id: 0 } },
	]);
	res.send(getStudentsMechOrComputers);
});

app.get("/getStudentsNotComputers/", async (req, res) => {
	const getStudentsNotComputers = await studentSchemaModel.aggregate([
		{
			$match: {
				$not: [{ course: "Computers" }],
			},
		},
		{ $project: { student_name: 1, course: 1, section: 1, _id: 0 } },
	]);
	res.send(getStudentsNotComputers);
});

module.exports = app;
