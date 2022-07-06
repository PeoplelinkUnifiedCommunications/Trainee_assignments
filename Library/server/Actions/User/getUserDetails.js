const UsersModel = require("../../models/Users")

const getUserDetails = async (request, response) => {
    let { email } = request;
    try {
        let user = await UsersModel.findOne({ email: email });
        if (user) {
            console.log("......user", user)
            response.send(user)
        } else {
            response.send("Invalid Token")
        }
    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }

}

module.exports = getUserDetails 