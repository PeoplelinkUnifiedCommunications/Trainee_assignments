const RequestedListModel = require("../../models/RequestedBooks")

const requestList=async(request,response)=>{
    const { email } = request;
    try {
        RequestedListModel.find({}, (err, result) => {
            if (err) {
                response.send(err)
            } else {
                response.send(result)
            }
        })

    }
    catch (error) {
        console.log(error)
        response.status(500).send("Server error");
    }
}
module.exports = requestList