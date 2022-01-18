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
		app.listen(3009, () => {
			console.log("Server running at http://localhost:3009");
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

app.post("/addStudentData/", async (req, res) => {
	await studentSchemaModel.insertMany(req.body);
	res.send("Data added successfully");
});

app.get("/getStudents/", async (req, res) => {
	const getStudentByStudentName = await studentSchemaModel.aggregate([
		{ $project: { student_name: 1, section: 1, _id: 0 } },
	]);
	res.send(getStudentByStudentName);
});

app.get("/getStudentNames/", async (req, res) => {
	const getStudentNames = studentSchemaModel.aggregate([
		{ $match: { age: { $gte: 20 } } },
	]);
	for await (const key of getStudentNames) {
		console.log(key.student_name, key.age);
	}
});

app.get("/getStudentNamesByAge/", async (req, res) => {
	const getStudentNamesByAge = await studentSchemaModel.aggregate([
		{ $match: { age: { $gte: 20 }, section: "A" } },
		{ $project: { student_name: 1, age: 1, section: 1, _id: 0 } },
	]);
	res.send(getStudentNamesByAge);
});

app.get("/getStudentGroup/", async (req, res) => {
	const getStudentGroup = await studentSchemaModel.aggregate([
		{ $sort: { age: -1 } },
		{ $match: { age: { $gte: 21 } } },
	]);
	res.send(getStudentGroup);
});

app.get("/countOfStudents/", async (req, res) => {
	const countOfStudents = await studentSchemaModel.aggregate([
		{
			$match: {
				section: "B",
			},
		},
		{
			$group: {
				_id: "$section",
				count: {
					$sum: 1,
				},
			},
		},
	]);
	res.send(countOfStudents);
});

app.get("/avgWeight/", async (req, res) => {
	const avgWeightOfStudents = await studentSchemaModel.aggregate([
		{
			$group: {
				_id: null,
				avgWeight: { $avg: "$weight" },
				maxWeight: { $max: "$weight" },
				minWeight: { $min: "$weight" },
				sumWeight: { $sum: "$weight" },
			},
		},
	]);
	res.send(avgWeightOfStudents);
});

app.get("/getStudentsByAgeRange/", async (req, res) => {
	const getStudentsByAgeRange = await studentSchemaModel.aggregate([
		{
			$match: {
				$or: [{ age: 20 }, { age: 22 }],
				$and: [{ course: "Mechanical" }],
			},
		},
		{
			$project: { student_name: 1, age: 1 },
		},
	]);
	res.send(getStudentsByAgeRange);
});

app.post("/addStudentMarksData/", async (req, res) => {
	await studentDetailsModel.insertMany(req.body);
	res.send("Data added successfully");
});

app.post("/addStudentClassDetails/", async (req, res) => {
	await studentClassDEatilsModel.insertMany(req.body);
	res.send("Data added successfully");
});
// $lookup
app.get("/studenDetailsPassORFail/", async (req, res) => {
	const studenDetailsPassORFail = await studentDetailsModel.aggregate([
		{
			$lookup: {
				from: "studentclassdeatils",
				localField: "name",
				foreignField: "student_name",
				as: "passOrFailStudentDeatils",
			},
		},
	]);

	res.send(studenDetailsPassORFail);
});

module.exports = app;
