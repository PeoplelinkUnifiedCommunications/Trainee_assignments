const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json());
const bodyParser = require("body-parser")
const UsersModel = require("./models/Users")
const BooksListModel = require("./models/BooksList")
const RequestedListModel = require("./models/RequestedBooks")
const IssuedBooksModel = require("./models/IssuedBooks")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { response, request } = require("express");
app.use(cors())



// authentication

const authenticateToken = (request, response, next) => {
    const jwtToken = request.headers["x-token"];
    if (jwtToken === undefined) {
        response.status(401);
        response.send("Invalid Access Token");
    } else {
        jwt.verify(jwtToken, "library_key", async (error, payload) => {
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

// get Requested Books

app.get("/getRequestList", authenticateToken, async (request, response) => {
    const { email } = request;
    try {
        RequestedListModel.find({}, (err, result) => {
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
})

// user Requested Books

app.get("/userRequestedBooks", authenticateToken, async (request, response) => {
    let { email } = request;
    try {
        RequestedListModel.find({}, (err, result) => {
            if (err) {
                response.send(err)
            } else {
                const list = result.filter((each) => each.requestedBy === email)
                response.send(list)
            }
        })
    }
    catch (error) {
        console.log(error)
        response.send(error)
    }
})

// get issued books for admin

app.get("/issuedBooks", authenticateToken, async (request, response) => {
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
})



// user Issued Books

app.get("/userIssuedBooks", authenticateToken, async (request, response) => {
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
})

// delete Book Request

app.delete("/userCancleBooksRequest/:id", authenticateToken, async (request, response) => {
    const { email } = request
    const _id = request.params.id

    try {
        RequestedListModel.findByIdAndRemove(_id).exec().then((response) => {
            response.send("success")
        }).catch((error) => {
            response.send(error)
        })


    } catch (error) {
        response.send("fail")
    }
})


//  accept Book Request 

app.delete("/acceptBookRequest/:id", async (request, response) => {
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
})




// post requested book

app.post("/requestBook", authenticateToken, async (request, response) => {
    const { email } = request;
    const { title, imageLink, author, description, publication, bookId } = request.body
    try {
        let exist = await RequestedListModel.findOne({ title: title, bookId: bookId, imageLink: imageLink, author: author, description: description, publication: publication, requestedBy: email })
        if (exist) {
            return response.status(400).send("Book already Exist")
        }

        const issued = await IssuedBooksModel.findOne({ bookId: bookId, bookId: bookId, imageLink: imageLink, author: author, description: description, publication: publication, issuedTo: email })
        if(issued){
            return response.status(400).send("book already exist")
        }

        let newBook = new RequestedListModel({ title: title, bookId: bookId, imageLink: imageLink, author: author, description: description, publication: publication, requestedBy: email })
        await newBook.save();
        response.status(200).send("Book request sent successfully");
    } catch (error) {
        console.log(error)
        response.status(500).send("Server error");
    }
})



// get Total Books

app.get("/totalBooks", authenticateToken, async (request, response) => {
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
})

// Get Home Page Info

app.get("/adminHome", authenticateToken, async(request, response)=>{
    const {email} = request;
    console.log("admin Home Page", email)
    try{
        const booksCount = await BooksListModel.count({})
        const usersCount = await UsersModel.count({})
        const issuedBooks = await IssuedBooksModel.count({})
        const requests = await RequestedListModel.count({})
        response.send({booksCount, usersCount, issuedBooks, requests})
    }
    catch(error){
        console.log(err)
        response.send("inavlid token")
    }
})

// Get User Page Info

app.get("/userHomeDetails", authenticateToken, async(request, response)=>{
    const {email} = request;
    console.log("admin Home Page", email)
    try{
        const booksCount = await BooksListModel.count({})
        const issuedBooks = await IssuedBooksModel.count({issuedTo:email})
        const requests = await RequestedListModel.count({requestedBy:email})
        response.send({booksCount, issuedBooks, requests})
    }
    catch(error){
        console.log(err)
        response.send("inavlid token")
    }
})



// Insert Book

app.post("/insertBook", authenticateToken, async (request, response) => {
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
})


//  User Login

app.post("/loginUser", async (req, res) => {
    const { email, password } = req.body;
    try {
        let exist = await UsersModel.findOne({ email: email })
        console.log(".....testing", exist)
        if (!exist) {
            return res.status(400).send("User not found");
        } else {
            const isPasswordMatched = await bcrypt.compare(password, exist.password)
            if (!isPasswordMatched) {
                return res.status(400).send("Invalid credentials");
            } else {
                const payload = { email: exist.email };
                const jwtToken = jwt.sign(payload, "library_key");
                return res.send(jwtToken)
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");

    }
})

// Get user books list

app.get("/userTotalBooks", authenticateToken, async (request, response) => {
    let { email } = request;
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
        response.send(error)
    }
})




// get UsersList for Admin

app.get("/usersList", authenticateToken, async (request, response) => {
    let { email } = request;
    try {
        UsersModel.find({}, (err, result) => {
            if (err) {
                response.send(err)
            } else {
                const list = result.filter((each) => each.userType === "User")
                response.send(list)
            }
        })
    }
    catch (error) {
        console.log(error)
        response.send(error)
    }
})

// homepage get details of user

app.get("/homePage", authenticateToken, async (request, response) => {
    let { email } = request;
    console.log("....email...", email)
    try {
        let user = await UsersModel.findOne({ email: email });
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

// register user

app.post("/registerUser", async (req, res) => {
    const { name, userType, email, password, year } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let exist = await UsersModel.findOne({ email: email });
        if (exist) {
            return res.status(400).send("Users already Exist")
        }
        let newUser = new UsersModel({
            Name: name, userType, email, password: hashedPassword, year
        })
        await newUser.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
})



const CONNECTION_URL = 'mongodb+srv://SujithaKonda:13QP1A0245@cluster0.k9ilwcu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        })
    ).catch(() => {
        console.log("error connecting")
    })

