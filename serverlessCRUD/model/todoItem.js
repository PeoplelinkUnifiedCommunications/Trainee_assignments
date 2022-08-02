const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }

})

const Todoitem =  mongoose.model("Todoitem",TodoItemSchema);
const TodoItem1 = mongoose.model(TodoItemSchema);
module.exports =  TodoItem1 || Todoitem;
