const RequestedListModel = require("../../models/RequestedBooks")
const IssuedBooksModel = require("../../models/IssuedBooks")

const acceptBookRequest=async(request, response)=>{
    const _id = request.params.id
    try {
        RequestedListModel.findOne({ _id: _id }, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                const { title, imageLink, author, bookId, description, requestedBy, publication } = results
                const bookIssued = new IssuedBooksModel({ bookId: bookId, title: title, author: author, publication: publication, description: description, imageLink: imageLink, issuedTo: requestedBy })
                bookIssued.save().then((res) => {
                    RequestedListModel.findByIdAndRemove(_id).exec()
                    response.send(res)
                }).catch((err) => {
                    console.log(err)
                })
            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }
}
module.exports = acceptBookRequest