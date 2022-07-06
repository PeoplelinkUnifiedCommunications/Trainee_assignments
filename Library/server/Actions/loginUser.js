const UsersModel = require("../models/Users")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const loginUser= async(req, res)=>{
    const { email, password } = req.body;
    try {
        let exist = await UsersModel.findOne({ email: email })
        if (!exist) {
            return res.status(400).send("User not found");
        } else {
            const isPasswordMatched = await bcrypt.compare(password, exist.password)
            if (!isPasswordMatched) {
                return res.status(400).send("Invalid credentials");
            } else {
                const payload = { email: exist.email };
                const jwtToken = jwt.sign(payload, "library_key");
                return res.send(jwtToken)
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");

    }
}
module.exports = loginUser