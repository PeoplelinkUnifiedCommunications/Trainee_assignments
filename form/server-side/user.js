import express from 'express'
import { v4 as uuidv4 }  from 'uuid'
import UserDetails from "./models/details.js"
import multer from 'multer'
import bcrypt from 'bcrypt'

// let users = []

const route = express.Router()

route.get('/', async(req, res) => {
    try {
        const userDetails = await UserDetails.find()
        // console.log(userDetails)

        res.status(200).json(userDetails)
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
})

route.post('/', async(req,res) => {
    const userDetails = await UserDetails.find()
    const {
        firstname,
        lastname,
        email,
        phone,
        company,
        role,
        gender,
        dob,
        image,
        password,
        confirm,
        imageName
    } = req.body


    if(firstname,lastname,email,phone,company,role,gender,dob, password, confirm,image) {
    try{
        
            const newUser = await UserDetails.create({firstname,lastname,email,phone,company,role,gender,dob, password, confirm, image, imageName})
            res.json(newUser)
    }catch(error){
        res.json({message: error.message})
    }
}else{
    res.status(400).send()
}
})

route.patch("/:id", async(req, res) => {
    const {id: _id} = req.params
    const {
        firstname,
        lastname,
        email,
        phone,
        company,
        role,
        gender,
        dob,
        password,
        confirm,
        // image
    } = req.body

    //  if(firstname,lastname,email,phone,company,role,gender,dob, password, confirm){

    try{
        const updateUser = await UserDetails.findByIdAndUpdate(_id, {
            firstname,
            lastname,
            email,
            phone,
            company,
            role,
            gender,
            dob,
            password,
            confirm,
            // image
        }, {new: true})
        res.status(200).json(updateUser)
    }catch(error){
        res.status(204).json(error.message)
    }
// }else{
//     res.send(400).send()
// }
    // const updateUser = await UserDetails.findByIdAndUpdate(_id, user, {new: true})
    // res.json(updateUser)
})

route.delete("/:id", async(req, res) => {
    const {id:_id} = req.params
    try {
        const deleteUser = await UserDetails.findByIdAndDelete(_id)
        res.status(200).json(deleteUser)
    } catch (error) {
        console.log(error.message)
    }
    
})



export default route;