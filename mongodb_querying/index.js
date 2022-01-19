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

// const companiesSchema = new mongoose.Schema({
//     name: String,
//     permalink: String,
//     crunchbase_url: String,
//     homepage_url: String,
//     blog_url: String,
//     blog_feed_url: String,
//     twitter_username: String,
//     category_code: String,
//     number_of_employees: Number,
//     founded_year: Number,
//     founded_month: Number,
//     founded_day: Number,
//     deadpooled_year: Number,
//     deadpooled_month: Number,
//     deadpooled_day: Number,
//     deadpooled_url: String,
//     tag_list: String,
//     alias_list: String,
//     email_address: String,
//     phone_number: String,
//     description: String,
//     created_at: String,
//     updated_at: String,
//     overview: String,
//     image: Object,
//     products: Array,
//     relationships: Array,
//     competitions: Array,
//     providerships: Array,
//     total_money_raised: String,
//     funding_rounds: Array,
//     investments: Array,
//     acquisition: Object,
//     acquisitions: Array,
//     offices: Array,
//     milestones: Array,
//     ipo: Object,
//     video_embeds: Array,
//     screenshots: Array,
//     external_links: Array,
//     partners: Array,
// });

const moviesCollection = mongoose.model("moviedatas", moviesData);
// const companiesdatabase = mongoose.model("companies", companiesSchema);

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

app.get("/getdata/", async (request, response) => {
    try {
        response.send(await moviesCollection.find({ $limit: 5 }));
    } catch (error) {
        console.log(error.message);
    }
});

//array size
app.get("/arraysize/", async (request, response) => {
    try {
        response.send(
            await studentCollection.aggregate([
                {
                    $project: {
                        noOfSubjects: { $size: "$subjects" },
                    },
                },
            ])
        );
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = app;
