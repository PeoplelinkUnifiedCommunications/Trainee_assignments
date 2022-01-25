const express = require("express");

const mongoose = require("mongoose");

const { Schema } = mongoose;

const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

let data;

const db = async () => {
	try {
		data = await mongoose.connect("mongodb://localhost:27017/eCommerecData");
		console.log("db connected....");
		app.listen(4001, () => {
			console.log("Server running at http://localhost:4001");
		});
	} catch (error) {
		console.log(error.massage);
	}
};

db();

const userDataSchema = new Schema({
	name: String,
	userName: String,
	email: String,
	password: String,
});

const productSchema = new Schema({
	product_name: String,
	product_image_url: String,
	price: Number,
	quantity: Number,
	description: String,
	isFevorites: Boolean,
});

const cartSchema = new Schema({
	product_name: String,
	product_image_url: String,
	price: Number,
	item_count: Number,
});

const userDataSchemaModel = mongoose.model("userData", userDataSchema);
const productSchemamodel = mongoose.model("productData", productSchema);
const cartSchemamodel = mongoose.model("cartData", cartSchema);

app.post("/addUser/", async (req, res) => {
	const { name, userName, email, password } = req.body;
	const userExits = await userDataSchemaModel.findOne({ userName: userName });
	if (userExits === null) {
		await userDataSchemaModel
			.create({
				name,
				userName,
				email,
				password,
			})
			.then(async () => {
				res.send(true);
			})
			.catch((error) => {
				res.send(error.message);
			});
	} else {
		res.send("user aleredy exists...");
	}
});

app.post("/login/", async (req, res) => {
	const { userName, password } = req.body;
	const loginUserData = await userDataSchemaModel.find({ userName: userName });
	console.log(loginUserData);
	if (loginUserData.length === 0) {
		res.send("Invalid user");
	} else {
		const isPasswordTrue = loginUserData[0].password === password;
		if (isPasswordTrue === true) {
			res.send(true);
		} else {
			res.send("Invalid password");
		}
	}
});

app.post("/addProduct/", async (req, res) => {
	await productSchemamodel.create(req.body);
	res.send("data added successgfully");
});

app.get("/getProductData/", async (req, res) => {
	const getProductData = await productSchemamodel.find();
	res.send(getProductData);
});

app.post("/addDataToCart/", async (req, res) => {
	await cartSchemamodel.create(req.body);
	res.send("data added successfully");
});

app.get("/getCartData/", async (req, res) => {
	const getCartData = await cartSchemamodel.find();
	res.send(getCartData);
});

app.delete("/deleteCartData/:id/", async (req, res) => {
	const { id } = req.params;
	await cartSchemamodel.deleteOne({ _id: id });
	res.send("Deleted");
});

app.put("/updateQnty/:id/", async (req, res) => {
	const { id } = req.params;
	await cartSchemamodel.updateOne({ _id: id }, { $set: req.body });
	res.send("updated");
});

app.put("/updateIsFavorites/:id/", async (req, res) => {
	const { id } = req.params;
	await productSchemamodel.updateOne({ _id: id }, { $set: req.body });
	res.send(await productSchemamodel.findOne({ _id: id }));
});

app.get("/getFavorites/", async (req, res) => {});
module.exports = app;
