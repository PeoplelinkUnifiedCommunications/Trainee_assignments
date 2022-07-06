const BooksListModel = require("../../models/BooksList")

const totalBooks=async(request,response)=>{
    const { email } = request;
    try {
        BooksListModel.find({}, (err, result) => {
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
module.exports = totalBooks