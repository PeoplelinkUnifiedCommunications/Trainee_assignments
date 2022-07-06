const RequestedListModel = require("../../models/RequestedBooks")
const IssuedBooksModel = require("../../models/IssuedBooks")

const requestForBook = async (request, response) => {
    const { email } = request;
    const { title, imageLink, author, description, publication, bookId } = request.body
    try {
        let exist = await RequestedListModel.findOne({ title: title, bookId: bookId, imageLink: imageLink, author: author, description: description, publication: publication, requestedBy: email })
        if (exist) {
            return response.status(400).send("Book already Requested")
        }

        const issued = await IssuedBooksModel.findOne({ bookId: bookId, bookId: bookId, imageLink: imageLink, author: author, description: description, publication: publication, issuedTo: email })
        if (issued) {
            return response.status(400).send("book already exist")
        }

        let newBook = new RequestedListModel({ title: title, bookId: bookId, imageLink: imageLink, author: author, description: description, publication: publication, requestedBy: email })
        await newBook.save();
        response.status(200).send("Book request sent successfully");
    } catch (error) {
        console.log(error)
        response.status(500).send("Server error");
    }

}

module.exports = requestForBook