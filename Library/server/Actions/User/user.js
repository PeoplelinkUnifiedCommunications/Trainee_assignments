const BooksListModel = require("../../models/BooksList")

const login = async (request, response) => {
    let { email } = request;
    try {
        const result = await BooksListModel.find({})
        if (result) {
            response.send(result)
        } else {
            response.send("error")
        }

    }
    catch (error) {
        console.log(error)
        response.send(error)
    }
}

module.exports = login
