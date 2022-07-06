const BooksListModel = require("../../models/BooksList")
const RequestedListModel = require("../../models/RequestedBooks")
const IssuedBooksModel = require("../../models/IssuedBooks")

const getUserInfo= async (request,response)=>{
    const { email } = request;
    try {
        const booksCount = await BooksListModel.count({})
        const issuedBooks = await IssuedBooksModel.count({ issuedTo: email })
        const requests = await RequestedListModel.count({ requestedBy: email })
        response.send({ booksCount, issuedBooks, requests })
    }
    catch (error) {
        console.log(err)
        response.send("inavlid token")
    }
}
module.exports = getUserInfo