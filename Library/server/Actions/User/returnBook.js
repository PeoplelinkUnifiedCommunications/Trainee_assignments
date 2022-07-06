const IssuedBooksModel = require("../../models/IssuedBooks")

const returnBook = async (request, response) => {
    const { email } = request
    const _id = request.params.id
    try {
        IssuedBooksModel.findByIdAndRemove(_id).exec().then((response) => {
            return response.send("Book retturned Successfully")
        }).catch((error) => {
            return response.send(error)
        })
    } catch (error) {
        return response.send("fail")
    }

}

module.exports = returnBook