const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express("");
const Library = require("./Model/Library");
const BooksData = require("./Model/BooksData");
const IssueBookData = require("./Model/IsseBookData");
const RequestBookData = require("./Model/RequestBookData");
// const ReturnedBookData = require("./Model/ReturnedBookData");
const ReturnBooksData = require('./Model/ReturnedBookData');
const LibraryAdmin = require('./Model/LibraryAdmin');
const middleware = require("./middleware")
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world")
});

console.log("library", Library)

app.post("/register", async (req, res) => {
    try {
        const { username, userType, email, password, confirmPassword } = req.body;
        let exist = await Library?.findOne({ email: email});
        let exist1 = await Library?.findOne({username : username})
        if(exist1){
            return res.status(400).send("username already Exist");
        }
        if (exist) {
            return res.status(400).send("Users already Exist")
        }
        if (password != confirmPassword) {
            return res.status(400).send(" Password is not same");
        }
        let newUser = new Library({
            username, userType, email, password, confirmPassword
        })
        
        await newUser.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
})


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        let exist = await Library.findOne({ email })
        // console.log("existexist",exist)
        if (!exist || exist === "") {
            return res.status(400).send("User not found");
        }
        if ((exist.password !== password) || password === "") {
            return res.status(400).send("Invalid credentials");
        }
        if(exist.userType === "Admin"){
            return res.status(400).send("candidate is not user");
        }
       
        let payload = {
            user: {
                id: exist.id
            }
        }
        jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 },
            (err, token) => {
                if (err) throw err;
                return res.json({ token })
            })
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");

    }
})

app.post("/loginAdmin", async (req, res) => {
    try {
        const { email, password } = req.body;
        let exist = await Library.findOne({ email })
        // console.log("existexist",exist)
        if (!exist || exist === "") {
            return res.status(400).send("User not found");
        }
        if ((exist.password !== password) || password === "") {
            return res.status(400).send("Invalid credentials");
        }
        if(exist.userType === "User"){
            return res.status(400).send("candidate is not user");
        }
       
        let payload = {
            user: {
                id: exist.id
            }
        }
        jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 },
            (err, token) => {
                if (err) throw err;
                return res.json({ token })
            })
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");

    }
})



app.get('/myprofile', middleware, async (req, res) => {
    try {
        let exist = await Library.findById(req.user.id);
        if (!exist) {
            return res.status(400).send("user not found");
        }
        res.json(exist);

    } catch (error) {
        console.log(error);
        return res.status(500).send("server error");
    }
})

app.get('/read', async (req, res) => {
    BooksData.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
});

app.get('/userdata', async (req, res) => {
    Library.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result)
    })
})


app.post('/requestbook', async (req, res) => {

    const title = req.body.title;
    const author = req.body.author;
    const isbn = req.body.isbn;
    const publication = req.body.publication;
    const username = req.body.username;
    const requestData = new RequestBookData({ title: title, author: author, isbn: isbn, publication: publication,username : username})
    try {
        await requestData.save();
        res.send("book is requested data");
    } catch (err) {
        console.log(err);
    }
});

app.get('/requestedbook', async (req,res)=>{
    RequestBookData.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        // console.log("this_is_repsone",res)
        res.send(result);
    })
})
app.post('/insert', async (req, res) => {

    const title = req.body.title;
    const author = req.body.author;
    const isbn = req.body.isbn;
    const publication = req.body.publication;
    const Form = new BooksData({ title: title, author: author, isbn: isbn, publication: publication })
    try {
        await Form.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});


app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await BooksData.findByIdAndRemove(id).exec();
    res.send("deleted");
});



app.put('/update/:id', async (req, res) => {
    // console.log("................",req)
    const title = req.body.title;
    const author = req.body.author;
    const isbn = req.body.isbn;
    const publication = req.body.publication;
    const id = req.params.id;
    console.log("id::::", id)
    try {
        const result = await BooksData.findByIdAndUpdate(id,  {
             title,
             author,
            isbn,
            publication,    
        })

        // console.log("result::::::", result)
        res.send(result)
    }catch (err) {
        console.log(err);
    }
});


app.post('/insertissuebook', async (req, res) => {

    const isbn = req.body.isbn;
    const username = req.body.username;
    const title = req.body.title;
    const author = req.body.author;
    const issueDate = req.body.issueDate;
    const returnDate = req.body.returnDate;
    const returnStatus = req.body.returnStatus;

    const issueForm = new RequestBookData({ isbn: isbn, username: username, title: title, author: author, issueDate: issueDate, returnDate: returnDate, returnStatus: returnStatus })
    try {
        await issueForm.save();
        res.send("inserted bookdata");
    } catch (err) {
        console.log(err);
    }
});




app.post("/issuedBooks/:_id", async (request, response) => {
    const _id = request.params._id
    try {
        RequestBookData.findOne({ _id: _id }, (err) => {
            if (err) {
                response.send(err);
            } else {
                // const { username, title, author, isbn,issueDate,returnDate,issued,returnStatus} = results
                    // const id = request.params.id;
                    const isbn = request.body.isbn;
                    const title = request.body.title;
                    const author = request.body.author;
                    const username = request.body.username;
                    const issueDate = request.body.issueDate;
                    const returnDate = request.body.returnDate;
                    const issued = request.body.issued;
                    const returnStatus = request.body.returnStatus;  
                    const bookIssued = new IssueBookData({ username:username , title: title, author: author, isbn: isbn,issueDate : issueDate,returnDate : returnDate, issued : issued, returnStatus: returnStatus })
                    bookIssued.save().then((res) => {
                        RequestBookData.findByIdAndRemove(_id).exec()
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


app.post("/returnedBooks/:_id", async (request, response) => {
    const _id = request.params._idcolor
    try {
        IssueBookData.findOne({ _id: _id }, (err) => {
            if (err) {
                response.send(err);
            } else {
                    const isbn = request.body.isbn;
                    const title = request.body.title;
                    const author = request.body.author;
                    const username = request.body.username;
                    const issueDate = request.body.issueDate;
                    const returnDate = request.body.returnDate;
                    const issued = request.body.issued;
                    const returnStatus = request.body.returnStatus; 
                    const returnedON = request.body.returnedON; 
                    const bookReturned = new ReturnBooksData({ username:username , title: title, author: author, isbn: isbn,issueDate : issueDate,returnDate : returnDate, issued : issued, returnStatus: returnStatus,returnedON : returnedON })
                    bookReturned.save()
                    .then((res) => {
                        IssueBookData.findByIdAndRemove(_id).exec()
                        console.log(res);
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

app.get("/returneddata",async(req,res)=>{
    ReturnBooksData.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})


app.get('/bookdata', async (req, res) => {
    IssueBookData.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);

    })
});


app.delete("/remove/:id", async (req, res) => {
    const id = req.params.id;
    await ReturnBooksData.findByIdAndRemove(id).exec();
    res.send("deleted");
});
                                                    // {/ "we have to enter databse name in between"?}
mongoose.connect("mongodb+srv://LibraryUser:pa13669@librarycluster.wrdjf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(
    () =>
        console.log("Mongodb server running.......")
).catch((err) => {
    console.log("error occured in mongodb")
})


app.listen(4000, () => {
    console.log("Server running at 4000.......")
})