const UsersModel = require("../../models/Users")

const usersList = ()=>{
    let { email } = request;
    try {
        UsersModel.find({}, (err, result) => {
            if (err) {
                response.send(err)
            } else {
                const list = result.filter((each) => each.userType === "User")
                response.send(list)
            }
        })
    }
    catch (error) {
        console.log(error)
        response.send(error)
    }
}
module.exports = usersList