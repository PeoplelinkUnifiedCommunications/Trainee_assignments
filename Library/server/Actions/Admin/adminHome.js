const UsersModel = require("../../models/Users")
const BooksListModel = require("../../models/BooksList")
const RequestedListModel = require("../../models/RequestedBooks")
const IssuedBooksModel = require("../../models/IssuedBooks")

const adminHome=async(request,response)=>{
    const { email } = request;
    try {
        const booksCount = await BooksListModel.count({})
        const usersCount = await UsersModel.count({})
        const issuedBooks = await IssuedBooksModel.count({})
        const requests = await RequestedListModel.count({})
        response.send({ booksCount, usersCount, issuedBooks, requests })
    }
    catch (error) {
        console.log(err)
        response.send("inavlid token")
    }
}
module.exports = adminHome