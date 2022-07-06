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
const login = require("./Actions/User/user");
const returnBook = require("./Actions/User/returnBook")
const getUserRequestedBooks = require("./Actions/User/requestedBook");
const deleteBookRequest = require("./Actions/User/deleteBookRequest");
const getUserDetails = require("./Actions/User/getUserDetails");
const requestForBook = require("./Actions/User/requestForBook");
const getUserIssuedBooks = require("./Actions/User/userIssuedBooks");
const getUserInfo = require("./Actions/User/userHomeInfo");
const addBook = require("./Actions/Admin/addBook");
const usersList = require("./Actions/Admin/usersList");
const acceptBookRequest = require("./Actions/Admin/accepBookRequest");
const adminHome = require("./Actions/Admin/adminHome");
const requestList = require("./Actions/Admin/requestsList");
const issuedBooksList = require("./Actions/Admin/issuedBookList");
const totalBooks = require("./Actions/Admin/totalBooks");
const loginUser = require("./Actions/loginUser");
const register = require("./Actions/register");

app.use(cors())


// authentication

const middleware = (request, response, next) => {
    const jwtToken = request.headers["x-token"];
    if(jwtToken === "newUser"){
        next();
    }else{
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

    }
   
};

app.use(middleware)


// get Requested Books

app.get("/getRequestList", async (request, response) => {
    requestList(request,response)
})



// get issued books for admin

app.get("/issuedBooks", async (request, response) => {
    issuedBooksList(request,response)
})


//  accept Book Request 

app.delete("/acceptBookRequest/:id", async (request, response) => {
   acceptBookRequest(request,response)
})


// get Total Books

app.get("/totalBooks", async (request, response) => {
   totalBooks(request,response)
})

// Get Home Page Info

app.get("/adminHome", async (request, response) => {
    adminHome(request,response)
})

// get UsersList for Admin

app.get("/usersList", async (request, response) => {
   usersList(request,response)
})



// Insert Book

app.post("/insertBook", async (request, response) => {
    addBook(request,response)
})


// delete API for returning book

app.delete("/returnBook/:id", async (request, response) => {
    returnBook(request,response)
})

// Get user books list

app.get("/userTotalBooks", async (request, response) => {
    login(request,response)
})


// user Requested Books

app.get("/userRequestedBooks", async (request, response) => {
    getUserRequestedBooks(request, response)
})

// Get User Page Info

app.get("/userHomeDetails", async (request, response) => {
    getUserInfo(request, response)
})


// user Issued Books

app.get("/userIssuedBooks", async (request, response) => {
    getUserIssuedBooks(request,response)
})



// post requested book

app.post("/requestBook", async (request, response) => {
    requestForBook(request,response) 
})


// delete Book Request

app.delete("/userCancleBooksRequest/:id", async (request, response) => {
    deleteBookRequest(request, response)
})



// homepage get details of user

app.get("/homePage", async (request, response) => {
    getUserDetails(request, response)

});

//  User Login

app.post("/loginUser" ,async (req, res) => {
    loginUser(req,res)
})

// register post API

app.post("/registerUser", async (req, res) => {
    register(req,res)
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

