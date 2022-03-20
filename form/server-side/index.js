import express from 'express'
import bodyParser from 'body-parser'
import route from './user.js'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use(cors());

app.use("/users", route)

const CONNECTION_URL = "MONGODB CONNECTION URL"

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(5000, (() => {
    console.log("Server is running on Port no 5000")
})))
.catch((error) => {
    console.log(error.message)
})
