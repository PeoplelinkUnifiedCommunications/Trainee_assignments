const mongoose = require('mongoose');
const TodoItemSchema = new mongoose.Schema({

  title:{
    type : String,
    required : true,
    unique : true
  },
  description:{
    type : String,
    required : true
  }
});
module.exports = mongoose.models['TodoItem'] || mongoose.model('TodoItem', TodoItemSchema);