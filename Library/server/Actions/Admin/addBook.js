const BooksListModel = require("../../models/BooksList");


const addBook = async (request, response) => {
    const { email } = request;
    const { title, imageLink, author, description, publication } = request.body
    try {
        let exist = await BooksListModel.findOne({ title: title, imageLink: imageLink, author: author, description: description, publication: publication })
        console.log("...........exist", exist)
        if (exist) {
            return response.status(400).send("Book already Exist")
        }
        let newBook = new BooksListModel({ title: title, bookId: Date.now(), imageLink: imageLink, author: author, description: description, publication: publication })
        await newBook.save();
        response.status(200).send("Book added successfully");
    } catch (error) {
        console.log(error)
        response.status(500).send("Server error");
    }

}

module.exports = addBook