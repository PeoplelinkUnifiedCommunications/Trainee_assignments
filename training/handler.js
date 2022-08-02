require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./db');

const TodoItem = require('./todo/model');

module.exports.create = async (event) => {
  return new Promise(async (resolve, reject) => {
    try {
      await connectToDatabase();
      let data = JSON.parse(event.body)  
      console.log("create---------------------------------------------------->",data)    
      const result = await TodoItem.create(data)
      console.log(result)
      const body = {
        statusCode: 200,
        body: JSON.stringify(result)
      }
      return resolve(body);
    } catch (err) {
      const body = {
          statusCode: err.statusCode || 500,
          headers: {'Content-Type': 'text/plain'},
          body: 'Could not create the object'
      }
      return reject(body)
    }
  });
}


module.exports.getAll = async (event) => {
  return new Promise(async (resolve, reject) => {
    try {
      await connectToDatabase();
      const result = await TodoItem.find()
      const body = {
        statusCode: 200,
        body: JSON.stringify(result)
      }
      return resolve(body);
    } catch (err) {
      const body = {
          statusCode: err.statusCode || 500,
          headers: {'Content-Type': 'text/plain'},
          body: 'Could not fetch the objects'
      }
      return reject(body)
    }
  });
}
module.exports.getOne = async (event) => {
  console.log("getOne=====================================>",event)
  return new Promise(async (resolve, reject) => {
    try {
      await connectToDatabase();
      const result = await TodoItem.findOne({title:{ $in: [event.pathParameters.title]}})
  console.log("getOne=====================================>",result)

      const body = {
        statusCode: 200,
        body: JSON.stringify(result)
      }
      return resolve(body);
    } catch (err) {
      const body = {
          statusCode: err.statusCode || 500,
          headers: {'Content-Type': 'text/plain'},
          body: 'Could not fetch the object'
      }
      return reject(body)
    }
  });
}

module.exports.update = async (event) => {
  console.log(event)
  const body = JSON.parse(event.body)
  const data = {
    $set : {
      title : body.title,
      description : body.description
    }
  }
  console.log("update================================================================================================>",data)
  return new Promise(async (resolve, reject) => {
    try {
      await connectToDatabase();
      const result = await TodoItem.findOneAndUpdate({_id: event.pathParameters.id}, data, { new: true })
      const body = {
        statusCode: 200,
        body: JSON.stringify(result)
      }
      return resolve(body);
    } catch (err) {
      const body = {
          statusCode: err.statusCode || 500,
          headers: {'Content-Type': 'text/plain'},
          body: 'Could not update the object'
      }
      return reject(body)
    }
  });
}

module.exports.delete = async (event) => {
  return new Promise(async (resolve, reject) => {
    try {
      await connectToDatabase();
      const result = await TodoItem.findByIdAndRemove(event.pathParameters.id)
      const body = {
        statusCode: 200,
        body: JSON.stringify(result)
      }
      return resolve(body);
    } catch (err) {
      const body = {
          statusCode: err.statusCode || 500,
          headers: {'Content-Type': 'text/plain'},
          body: 'Could not delete the object'
      }
      return reject(body)
    }
  });
}