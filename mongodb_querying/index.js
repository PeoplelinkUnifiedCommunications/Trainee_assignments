const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = async () => {
    try {
        await mongoose
            .connect(
                "mongodb+srv://siva:siva1991@sivacluster.xxes8.mongodb.net/myMoviesDatabase?retryWrites=true&w=majority"
            )
            .then(() => {
                console.log("DB Connected...!!!");
                app.listen(9090, () => console.log("Server Running"));
            })
            .catch((error) => console.log(error.message));
    } catch (error) {
        console.log(error.message);
    }
};

db();

const moviesData = new mongoose.Schema({
    title: String,
    writer: String,
    year: Number,
    actors: [String],
    franchise: String,
    synopsis: String,
});

const moviesCollection = mongoose.model("moviedatas", moviesData);

app.post("/movies/", async (request, response) => {
    try {
        await moviesCollection.insertMany(request.body);
        response.send(await moviesCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

app.post("/movie/", async (request, response) => {
    try {
        await moviesCollection.create(request.body);
        response.send(await moviesCollection.find());
    } catch (error) {
        console.log(error.message);
    }
});

// app.get("/getmovies/", async (request, response) => {
//     try {
//         response.send(await moviesCollection.find());
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// app.get("/getmovies/:writer", async (request, response) => {
//     const writer = request.params.writer;
//     try {
//         response.send(await moviesCollection.find({ writer: writer }));
//     } catch (error) {
//         console.log(error.message);
//     }
// });

app.get("/getmovies/", async (request, response) => {
    const { name } = request.query;
    console.log(name);
    try {
        response.send(await moviesCollection.find({ actor: / name / }));
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/getmovies/", async (request, response) => {
    const { year1, year2 } = request.query;
    console.log(year1, year2);
    try {
        response.send(
            await moviesCollection.find({ year: { $gte: year2, $lte: year1 } })
        );
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = app;
