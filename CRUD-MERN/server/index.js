const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json());
const bodyParser = require("body-parser")
const FormModel = require("./models/Form")
const LibraryModel = require("./models/Library")
const BooksDatatModel = require("./models/BooksData")
const RequestedBooksModel = require("./models/RequestedBooks")
const IssuedBooksModel = require("./models/IssuedBooks")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { response, request } = require("express");



app.use(cors())


app.get("/", async (req, res) => {
    
    const form = new FormModel({ fName: "sujitha", lName: "konda" })
    try {
        await form.save();
        res.send("")

    } catch (err) {
        console.log(err);
    }
});

app.get("/getUsers", async (req, res) => {
    FormModel.find({}, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results)
        }
    })
})


app.post("/addUser", async (req, res) => {
    const name = req.body.name;
    const secondName = req.body.secondName;
    const form = new FormModel({ fName: name, lName: secondName })
    try {
        await form.save();
        res.send("success")

    } catch (err) {
        console.log(err);
    }
})

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    FormModel.findByIdAndRemove(id).exec()
})



app.put("/update", async (req, res) => {

    const Id = req.body.id;
    const updatedName = req.body.name;
    const updatedSecondName = req.body.secondName

    try {
        await FormModel.findById(Id, (error, userToUpdate) => {
            userToUpdate.fName = updatedName;
            userToUpdate.lName = updatedSecondName;
            userToUpdate.save();
        })
    }
    catch (error) {
        console.log(error)
    }


})

const authenticateToken = (request, response, next) => {
    const jwtToken = request.headers["x-token"];
    if (jwtToken === undefined) {
        response.status(401);
        response.send("Invalid Access Token");
    } else {
        jwt.verify(jwtToken, "Books_Key", async (error, payload) => {
            if (error) {
                response.send("Invalid Access Token");
            } else {
                const { email } = payload
                request.email = email
                next();
            }
        });
    }
};

// get user Issued books

app.get("/myIssuedBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log(".......email.....", email)
    try {
        IssuedBooksModel.find({}, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                const list = results.filter((each) => each.issuedTo === email)
                response.send(list)
            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }


})



// get total issued Books for Admin

app.get("/totalIssuedBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log(".......email.....", email)
    try {
        IssuedBooksModel.find({}, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                response.send(results)
            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }


})



// issue Requested Book and delete in request list

app.delete("/issueBook/:id", async (request, response) => {
    const _id = request.params.id
    try {
        RequestedBooksModel.findOne({ _id: _id }, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                const { id, title, author, publication, year, issuedTo } = results
                const bookIssued = new IssuedBooksModel({ bookId: id, title: title, author: author, publication: publication, year: year, issuedTo: issuedTo })
                bookIssued.save().then((res) => {
                    RequestedBooksModel.findByIdAndRemove(_id).exec()
                    res.send("book issued")
                }).catch((err) => {
                    res.send(err)
                })
            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }

})


// get all Requested books for Admin

app.get("/requestedBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log(".......email.....", email)
    try {
        RequestedBooksModel.find({}, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                response.send(results)
            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }


})





// delete issue Request 



app.delete("/deleteIssueRequest/:id", async (req, res) => {
    const id = req.params.id
    RequestedBooksModel.findByIdAndRemove(id).exec()
    res.send("Reqest Deleted")
})

// get requested User books API:

app.get("/userRequestedBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    try {
        RequestedBooksModel.find({}, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                const list = results.filter((each) => each.issuedTo === email)
                response.send(list)

            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }
})

// get Books for student

app.get("/myBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    try {
        let user = await LibraryModel.findOne({ email: email });
        if (user) {
            const year = user["year"]
            BooksDatatModel.find({}, (err, results) => {
                if (err) {
                    response.send(err);
                } else {
                    const list = results.filter((each) => each.year === year)
                    response.send(list)
                }
            })
        } else {
            response.send("Invalid Token")
        }

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }

})

// add To book Request List

app.post("/addBooKRequest", authenticateToken, async (request, response) => {
    const { email } = request
    const bookName = request.body.title;
    const author = request.body.author;
    const id = request.body._id;
    const publication = request.body.publication;
    const year = request.body.year;

    try {
        let exist = await RequestedBooksModel.findOne({ id: id, title: bookName, author: author, publication: publication, year: year, issuedTo: email });
        if (exist) {
            return response.send("Request already sent")
        }
        const newBook = new RequestedBooksModel({ id: id, title: bookName, author: author, publication: publication, year: year, issuedTo: email })
        await newBook.save();
        response.status(200).send("Request Sent successfully");
    } catch (error) {
        console.log(error)
        response.status(500).send("Server error");
    }
})






// get Total books for admin

app.get("/totalBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log(".......email.....", email)
    try {
        BooksDatatModel.find({}, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                response.send(results)
            }
        })

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }


})

// add book to library.

app.post("/addBook", async (req, res) => {
    const bookName = req.body.bookName;
    const author = req.body.author;
    const publication = req.body.publication;
    const year = req.body.year;

    try {
        let exist = await BooksDatatModel.findOne({ title: bookName, author: author, publication: publication, year: year });
        if (exist) {
            return res.status(400).send("Book already Exist")
        }
        const newBook = new BooksDatatModel({ title: bookName, author: author, publication: publication, year: year })
        await newBook.save();

        res.status(200).send("Book added successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
})

// get Existing Users List

app.get("/users", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log("...email", email);
    try {
        LibraryModel.find({}, (err, results) => {
            if (err) {
                response.send(err);
            } else {
                const list = results.filter((each) => each.userType === "User")
                response.send(list)

            }
        })
    }
    catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }
})


// myprofile details

app.get("/myprofile", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log("....email...", email)
    try {
        let user = await LibraryModel.findOne({ email: email });
        if (user) {
            console.log("......user", user)
            response.send(user)
        } else {
            response.send("Invalid Token")
        }

    } catch (error) {
        console.log(error)
        response.send("Invalid Token")
    }

});



// Create User API

app.post("/register", async (req, res) => {
    const { username, userType, email, password, year } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let exist = await LibraryModel.findOne({ email: email });
        if (exist) {
            return res.status(400).send("Users already Exist")
        }
        let newUser = new LibraryModel({
            username, userType, email, password: hashedPassword, year
        })
        await newUser.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
})



// User Log in API

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let exist = await LibraryModel.findOne({ email })
        if (!exist) {
            return res.status(400).send("User not found");
        } else {
            const isPasswordMatched = await bcrypt.compare(password, exist.password)
            if (!isPasswordMatched) {
                return res.status(400).send("Invalid credentials");
            } else {
                const payload = { email: exist.email };
                const jwtToken = jwt.sign(payload, "Books_Key");
                return res.send(jwtToken)
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");

    }
})





const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        })
    )

