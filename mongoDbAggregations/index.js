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

const setOperationsSchema = new Schema({
	A: Array,
	B: Array,
});

const studentSchemaModel = mongoose.model("studentData", studentSchema);
const studentDetailsModel = mongoose.model("studentMarks", studentMarksDeatils);
const studentClassDEatilsModel = mongoose.model(
	"studentClassDEatils",
	studentClassDEatilsSchema
);
const setOperationsSchemaModel = mongoose.model(
	"setOperationsData",
	setOperationsSchema
);

app.get("/getData/", async (req, res) => {
	const getData = await studentSchemaModel.find();
	res.send(getData);
});

//setOperations

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

app.post("/addData/", async (req, res) => {
	await setOperationsSchemaModel.insertMany(req.body);
	res.send("add successfully");
});

app.get("/setEquales/", async (req, res) => {
	const setEqualesData = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				A: 1,
				B: 1,
				setEquales: { $setEquals: ["$A", "$B"] },
				_id: 0,
			},
		},
		{
			$match: { setEquales: true },
		},
	]);

	res.send(setEqualesData);
});

app.get("/commonData/", async (req, res) => {
	const commonData = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				A: 1,
				B: 1,
				commonBoth: { $setIntersection: ["$A", "$B"] },
				_id: 0,
			},
		},
	]);
	res.send(commonData);
});

app.get("/setunionData/", async (req, res) => {
	const setunionData = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				A: 1,
				B: 1,
				allData: { $setUnion: ["$A", "$B"] },
				_id: 0,
			},
		},
	]);
	res.send(setunionData);
});

app.get("/setDifferenceData/", async (req, res) => {
	const setDifferenceData = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				A: 1,
				B: 1,
				differenceData: { $setDifference: ["$B", "$A"] },
				_id: 0,
			},
		},
	]);
	res.send(setDifferenceData);
});

app.get("/setIsSubsetData/", async (req, res) => {
	const setIsSubsetData = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				A: 1,
				B: 1,
				AisSubset: { $setIsSubset: ["$A", "$B"] },
				_id: 0,
			},
		},
	]);
	res.send(setIsSubsetData);
});

//arithimetic operations

app.get("/absoluteValues/", async (req, res) => {
	const absoluteValues = await studentDetailsModel.aggregate([
		{
			$project: { reminingMarks: { $abs: { $subtract: ["$marks", 100] } } },
		},
	]);
	res.send(absoluteValues);
});

app.get("/addMarks/", async (req, res) => {
	const addMarks = await studentDetailsModel.aggregate([
		{
			$project: { marks: 1, addingMarks: { $add: ["$marks", 20] } },
		},
	]);
	res.send(addMarks);
});

app.get("/ceilMarks/", async (req, res) => {
	const ceilMarks = await studentDetailsModel.aggregate([
		{
			$project: {
				_id: 0,
				fractionalMarks: { $divide: ["$marks", 8] },
				ceilMarks: { $ceil: { $divide: ["$marks", 8] } },
				floorMarks: { $floor: { $divide: ["$marks", 8] } },
			},
		},
	]);
	res.send(ceilMarks);
});

app.get("/logarithm/", async (req, res) => {
	const logarithm = await studentDetailsModel.aggregate([
		{
			$project: { marks: 1, logarithm: { $ln: "$marks" } },
		},
	]);
	res.send(logarithm);
});

app.get("/reminder/", async (req, res) => {
	const reminder = await studentDetailsModel.aggregate([
		{
			$project: { marks: 1, reminder: { $mod: ["$marks", 7] } },
		},
	]);
	res.send(reminder);
});

app.get("/multiple/", async (req, res) => {
	const multiple = await studentDetailsModel.aggregate([
		{
			$project: {
				_id: 0,
				persentage: { $multiply: [{ $divide: ["$marks", 100] }, 100] },
			},
		},
	]);
	res.send(multiple);
});

app.get("/power/", async (req, res) => {
	const powerMarks = await studentDetailsModel.aggregate([
		{
			$project: {
				_id: 0,
				pow: { $pow: ["$marks", 2] },
				sqrt: { $sqrt: { $pow: ["$marks", 2] } },
			},
		},
	]);
	res.send(powerMarks);
});

//string operations

app.get("/concatNameAndCourse/", async (req, res) => {
	const concatNameAndCourse = await studentSchemaModel.aggregate([
		{
			$project: {
				_id: 0,
				studenNameAndCourse: {
					$toUpper: { $concat: ["$student_name", "-", "$course"] },
				},
			},
		},
	]);
	res.send(concatNameAndCourse);
});

app.get("/substr/", async (req, res) => {
	const substr = await studentSchemaModel.aggregate([
		{
			$project: {
				_id: 0,
				subString: { $substr: ["$student_name", 0, 3] },
			},
		},
	]);
	res.send(substr);
});

//pipeline aggregations

app.get("/getSubjects/", async (req, res) => {
	var subj = ["Computer graphics", "Fluid Mechanics", "Engineering Mechanics"];
	const getSubjects = await studentSchemaModel.aggregate([
		{
			$project: { student_name: 1, subjects: 1, _id: 0 },
		},
		{
			$redact: {
				$cond: {
					if: {
						$gt: [{ $size: { $setIntersection: ["$subjects", subj] } }, 0],
					},
					then: "$$DESCEND",
					else: "$$PRUNE",
				},
			},
		},
	]);
	res.send(getSubjects);
});

app.get("/unwind/", async (req, res) => {
	const unWind = await studentSchemaModel.aggregate([
		{
			$match: { student_name: "Harish" },
		},
		{
			$unwind: "$subjects",
		},
	]);
	res.send(unWind);
});

app.get("/group/", async (req, res) => {
	const group = await studentSchemaModel.aggregate([
		{
			$group: { _id: null, totalFees: { $sum: "$course_fee" } },
		},
	]);
	res.send(group);
});

app.get("/sample/", async (req, res) => {
	const sample = await studentSchemaModel.aggregate([
		{
			$sample: { size: 3 },
		},
		{
			$sort: { weight: -1 },
		},
	]);
	res.send(sample);
});

app.get("/outAgggregation/", async (req, res) => {
	const outAgggregation = await studentSchemaModel.aggregate([
		{
			$group: { _id: "$section", student_names: { $push: "$student_name" } },
		},
		{
			$out: "sections",
		},
	]);
	res.send(outAgggregation);
});

//array aggregations operations

app.get("/getFirstAndLastSubject/", async (req, res) => {
	const getFirstAndLastSubject = await studentSchemaModel.aggregate([
		{
			$project: {
				_id: 0,

				first: { $arrayElemAt: ["$subjects", 0] },
				last: {
					$arrayElemAt: [
						"$subjects",
						{ $subtract: [{ $size: "$subjects" }, 1] },
					],
				},
			},
		},
	]);
	res.send(getFirstAndLastSubject);
});

app.get("/concatArrays/", async (req, res) => {
	const concatArrays = await setOperationsSchemaModel.aggregate([
		{
			$project: { concatArrays: { $concatArrays: ["$A", "$B"] } },
		},
	]);
	res.send(concatArrays);
});

app.get("/filter/", async (req, res) => {
	const filter = await studentSchemaModel.aggregate([
		{
			$match: { student_name: "Harish" },
		},
		{
			$project: {
				item: {
					$filter: {
						input: "$subjects",
						as: "item",
						cond: {},
					},
				},
			},
		},
	]);
	res.send(filter);
});

app.get("/isArray/", async (req, res) => {
	const isArray = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				concatarray: {
					$cond: {
						if: { $and: [{ $isArray: "$A" }, { $isArray: "$B" }] },
						then: { $concatArrays: ["$A", "$B"] },
						else: "One or more fields is not an array.",
					},
				},
			},
		},
	]);
	res.send(isArray);
});

app.get("/isArraySize/", async (req, res) => {
	const isArraySize = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				A: 1,
				B: 1,
				_id: null,
				size: {
					$size: {
						$cond: {
							if: { $and: [{ $isArray: "$A" }, { $isArray: "$B" }] },
							then: { $concatArrays: ["$A", "$B"] },
							else: "One or more fields is not an array.",
						},
					},
				},
			},
		},
	]);
	res.send(isArraySize);
});

app.get("/silceArray/", async (req, res) => {
	const silceArray = await setOperationsSchemaModel.aggregate([
		{
			$project: {
				slice: {
					$slice: [
						{
							$cond: {
								if: { $and: [{ $isArray: "$A" }, { $isArray: "$B" }] },
								then: { $concatArrays: ["$A", "$B"] },
								else: "One or more fields is not an array.",
							},
						},
						3,
					],
				},
			},
		},
	]);
	res.send(silceArray);
});

module.exports = app;
