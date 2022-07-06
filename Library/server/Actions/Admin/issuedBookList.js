const IssuedBooksModel = require("../../models/IssuedBooks")

const issuedBooksList = async(request,response)=>{

    let { email } = request;
    try {
        IssuedBooksModel.find({}, (err, result) => {
            if (err) {
                response.send(err)
            } else {
                response.send(result)
            }
        })
    }
    catch (error) {
        console.log(error)
        response.send(error)
    }

}
module.exports = issuedBooksList