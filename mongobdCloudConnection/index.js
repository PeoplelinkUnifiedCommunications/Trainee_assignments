const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
app.use(express.json());

const db = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://Harish:Hari997@cluster0.ledtb.mongodb.net/moviesData?retryWrites=true&w=majority"
		);
		console.log("db conencted.....");
		app.listen(3008, () => {
			console.log("Server running at http://localhost:3008");
		});
	} catch (error) {
		console.log(error.massage);
	}
};

db();

const moviesSchema = new Schema({
	title: String,
	writer: String,
	year: Number,
	actors: [String],
	franchise: String,
});

const moviesSchemaModel = mongoose.model("movies", moviesSchema);

app.post("/addMovies/", async (req, res) => {
	const addMoviesData = await moviesSchemaModel.insertMany(req.body);
	res.send("added successfully");
});

app.post("/addOneMovie/", async (req, res) => {
	const addOneMOvie = await moviesSchemaModel.create(req.body);
	res.send("add one movie is succussfully");
});

app.get("/getMovieData/", async (req, res) => {
	const getData = await moviesSchemaModel.find();
	res.send(getData);
});

app.get("/getMovieByWriter/:writer", async (req, res) => {
	const { writer } = req.params;
	const getMovieByWriter = await moviesSchemaModel.find({ writer: writer });
	res.send(getMovieByWriter);
});

app.get("/getMovieYear/", async (req, res) => {
	const { year1, year2 } = req.query;
	const getMovieByYear = await moviesSchemaModel.find({
		year: { $gte: year2, $lte: year1 },
	});
	res.send(getMovieByYear);
});

app.get("/getMovieByActorAndWriter/", async (req, res) => {
	const { year, writer } = req.query;
	const getMovieByActorAndWriter = await moviesSchemaModel.find({
		writer: writer,
		year: year,
	});
	res.send(getMovieByActorAndWriter);
});

module.exports = app;
