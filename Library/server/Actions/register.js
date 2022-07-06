const UsersModel = require("../models/Users")
const bcrypt = require("bcrypt");

const register=async(req,res)=>{
    const { name, userType, email, password, year } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let exist = await UsersModel.findOne({ email: email });
        if (exist) {
            return res.status(400).send("Users already Exist")
        }
        let newUser = new UsersModel({
            Name: name, userType, email, password: hashedPassword, year
        })
        await newUser.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
}
module.exports = register