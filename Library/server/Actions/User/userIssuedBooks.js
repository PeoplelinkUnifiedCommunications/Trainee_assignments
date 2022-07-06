const IssuedBooksModel = require("../../models/IssuedBooks")

const getUserIssuedBooks = async (request, response) => {
    let { email } = request;
    try {
        IssuedBooksModel.find({}, (err, result) => {
            if (err) {
                response.send(err)
            } else {
                const list = result.filter((each) => each.issuedTo === email)
                response.send(list)
            }
        })
    }
    catch (error) {
        console.log(error)
        response.send(error)
    }

}

module.exports = getUserIssuedBooks 