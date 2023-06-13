const axios= require('axios')
const fs=require('fs')

//fetching data
async function fetchData(){
    try{
    const response=await axios.get('https://dummyjson.com/products/1') 
    const apiData=response.data

    //converting to string format
    const jsonData=JSON.stringify(apiData)
    fs.writeFile('userData.json',jsonData,'utf8',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Data has been stored')
    })
    }catch(e){
        console.log(e)
    }

}

fetchData()

