const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express("");
const Library = require("./Model/Library");
const BooksData = require("./Model/BooksData");
const IssueBookData = require("./Model/IsseBookData");
const middleware = require("./middleware")
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello world")
});

console.log("library",Library)

app.post("/register", async (req,res)=>{
    try {
        const{username,userType,email,password,confirmPassword} = req.body;
        let exist = await Library?.findOne({email : email});
        if(exist){
            return res.status(400).send("Users already Exist")
        }
        if(password != confirmPassword){
            return res.status(400).send(" Password is not same");
        }
        let newUser = new Library({
            username,userType,email,password,confirmPassword
        })
        await newUser.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
})

app.post("/login", async(req,res)=>{
    try {
        const{email,password} = req.body;
        let exist = await Library.findOne({email})
        if(!exist){
            return res.status(400).send("User not found");
        }
        if(exist.password !== password){
            return res.status(400).send("Invalid credentials");
        }
        let payload = {
            user : {
            id : exist.id
            }
        }
        jwt.sign(payload,"jwtSecret",{expiresIn : 3600000},
            (err,token)=>{
                if(err) throw err;
                return res.json({token})
            })
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");   
        
    }
})

app.get('/myprofile',middleware, async(req,res)=>{
    try {
        let exist = await Library.findById(req.user.id);
        if(!exist){
            return res.status(400).send("user not found");
        }
        res.json(exist);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("server error");
    }
})

app.get('/read',async (req,res)=>{
    BooksData.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
});

app.get('/userdata', async (req,res)=>{
    Library.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result)
    })
})

app.post('/insert', async (req,res)=>{

    const title = req.body.title;
    const author = req.body.author; 
    const isbn = req.body.isbn;
    const publication = req.body.publication; 
    const Form = new BooksData({title : title , author : author , isbn : isbn , publication : publication})
    try {
        await Form.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});


app.delete("/delete/:id", async (req,res)=>{
    const id = req.params.id;
    await BooksData.findByIdAndRemove(id).exec();
    res.send("deleted");
});



app.put('/update', async(req,res)=>{
    const newTitle = req.body.newTitle;
    const newAuthor = req.body.newAuthor;
    const newIsbn = req.body.newIsbn;
    const newPublication = req.body.newPublication;
    const id = req.body.id;
    try {
        await BooksData.findById(id,(err,updatedFood)=>{
            updatedFood.title = newTitle;
            updatedFood.author = newAuthor;
            updatedFood.isbn = newIsbn;
            updatedFood.publication = newPublication;
            updatedFood.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err);
    }
});


app.post('/insertissuebook', async (req,res)=>{

    const isbn = req.body.isbn;
    const username = req.body.username;
    const title = req.body.title;
    const author = req.body.author; 
    const issueDate = req.body.issueDate;
    const returnDate  = req.body.returnDate;
    const returnStatus = req.body.returnStatus;

    const issueForm = new IssueBookData({ isbn : isbn , username : username , title : title , author : author, issueDate : issueDate, returnDate : returnDate , returnStatus : returnStatus })
    try {
        await issueForm.save();
        res.send("inserted bookdata");
    } catch(err) {
        console.log(err);
    }
});

app.get('/bookdata', async (req,res)=>{
    IssueBookData.find({},(err,result)=>{
            if(err){
                res.send(err);
            }
            res.send(result);
            
    })
});

app.delete("/remove/:id", async (req,res)=>{
    const id = req.params.id;
    await IssueBookData.findByIdAndRemove(id).exec();
    res.send("deleted");
});

mongoose.connect("mongodb+srv://LibraryUser:pa13669@librarycluster.wrdjf.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true
}).then(
    ()=>
    console.log("Mongodb server running.......")
).catch((err) => {
    console.log("error occured in mongodb")
})


app.listen(4000,()=>{
    console.log("Server running at 4000.......")
})