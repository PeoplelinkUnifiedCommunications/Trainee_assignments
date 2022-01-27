const express = require("express")
const app =express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

const mongoose  = require('mongoose');
const {Schema,model} = mongoose;


const db = async ()=>{
  try{
    await mongoose.connect("mongodb://localhost:27017/assignmentDb")
  console.log("db connected....")
  app.listen(3004,()=>console.log("server started at http://localhost:3004"))
  }catch(e){
    console.log(`DB Error:${e.message}`);
    process.exit(1);
    }
  
}

db().catch(err => console.log(err.message));

/////////////////////////////////////////////////////////////
/////////login schema //////////////////////////////////////
////////////////////////////////////////////////////////////

const loginSchema = new Schema({
    userName:String,
    password:String
})

const loginModel = model("Login",loginSchema)


//login post
const login = async ()=>{
    await loginModel.create({
        userName:"admin",
        password:"Admin@1234"
    })
}

login()

app.post("/register/",async (request,response)=>{
    await loginModel.create({
        userName:"bharath",
        password:"Bharath@1234"
    })
    response.send(await loginModel.find())
})



//login get 
app.post("/login/",async (request,response)=>{
    const {userName,password} = request.body
    const data = await loginModel.findOne({userName,password})
    if(data === null){
        response.send({status:404,message:"invalid UserName or Password"})
        
    }else{
        response.send({status:200,message:"login successfull"})
    }
})



//login post
app.post("/registers/",async (request,response)=>{
    const {userName,password} = request.body
    await loginModel.create({
        userName,
        password
    })
    response.send(await loginModel.find())
})



///////////////////////////////////////////////////////////////////////
///////////////////product schema ////////////////////////////////////
/////////////////////////////////////////////////////////////////////


const productSchema = new Schema({
    product_name: String,
    product_image_url: String,
    retail_price: Number,
    selected_quantity:{type:Number,default:1},
    quantity: Number,
    description: String,
    favorites:Boolean,
})

const productModel = model("products",productSchema)
const cartModel = model('cart',productSchema)


// add product

app.post("/addProduct/",async (request,response)=>{
    await productModel.create(request.body)
    response.send("Data Added Successfully")
})

app.get("/getProductsList/",async (request,response)=>{
    const productsList = await productModel.find()
    response.send(productsList)
})


app.post("/addProductToCart/",async (request,response)=>{
    try{
        const isAvailable = await cartModel.findOne({_id:request.body._id})
        if (isAvailable=== null){
            await cartModel.create(request.body)
        }else{
            await cartModel.updateOne({_id:request.body._id
            },[ { $set: {
                selected_quantity:request.body.selected_quantity,
            } } ])
        }
        await productModel.updateOne({_id:request.body._id
        },[ { $set: {
            selected_quantity:request.body.selected_quantity,
        } } ])
        response.send("Data Added Successfully")
    }catch{
        response.send("error")
    }
   
    
})

app.get("/getCartProductsList/",async (request,response)=>{
    const cartProductsList = await cartModel.find()
    response.send(cartProductsList)
})

app.delete('/deleteCartItem/:id',async (request,response)=>{
    await cartModel.deleteOne({_id:request.params.id})
    await productModel.updateOne({_id:request.params.id},[ { $set: {
        selected_quantity:1,
    } } ])
    response.send("deleted Successfully")
})

app.put('/updateCartQuantity/:id',async (request,response)=>{
    await cartModel.updateOne({_id:request.params.id},[ { $set: {
        selected_quantity:request.body.selected_quantity,
    } } ])
    await productModel.updateOne({_id:request.params.id},[ { $set: {
        selected_quantity:request.body.selected_quantity,
    } } ])
    response.send("deleted Successfully")
})

app.put('/updateFavorites/:id',async (request,response)=>{
    try{
        await productModel.updateOne({_id:request.params.id},[ { $set: {
            favorites:request.body.favorites,
        } } ])
        response.send(productModel.findOne({_id:request.params.id}))
    }catch(error){
        response.send(error)
    
    }
})


app.get('/getProductItem/:id',async (request,response)=>{
    const {id} = request.params
    const productsList = await productModel.findOne({_id:id})
    response.send(productsList)
})









module.exports = app
