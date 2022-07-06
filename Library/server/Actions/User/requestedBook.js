
const RequestedListModel = require("../../models/RequestedBooks")

const getUserRequestedBooks = async (request, response) => {
    let { email } = request;
    try {
        const result = await RequestedListModel.find({requestedBy : email})
        if (result) {
           response.send(result)
        } else {
            response.send("error")
        }
    }
    catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }

}

module.exports = getUserRequestedBooks