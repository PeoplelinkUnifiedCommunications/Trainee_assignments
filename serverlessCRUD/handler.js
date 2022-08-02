'use strict';
const connectToDatabase  = require("./db");
const Todoitem = require("./model/todoItem")
module.exports.hello =(event,context,callback) =>{
  console.log("hello world");
  callback(null,"hello world");
} 

module.exports.create = (event,context,callback)=>{
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase().then(()=>{
    Todoitem.create(JSON.parse(event.body))
    .then(note=>
      callback(null,{
        statusCode : 200,
        body : JSON.stringify(Todoitem)
      }))
  })
  .catch(err=>{
    callback(null,{
      statusCode : err.statusCode || 500,
      headers : {"Content_Type" : "text/plain"},
      body : "Could not create the todoitem."
    });
  });
};

// {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
