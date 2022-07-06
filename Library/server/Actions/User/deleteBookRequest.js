
const RequestedListModel = require("../../models/RequestedBooks")

const deleteBookRequest = async (request, response) => {
    const { email } = request
    const _id = request.params.id
    try {
        RequestedListModel.findByIdAndRemove(_id).exec().then((response) => {
            response.send("success")
        }).catch((error) => {
            response.send(error)
        })

    } catch (error) {
        response.send("fail")
    }

}

module.exports = deleteBookRequest