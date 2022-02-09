const express = require("express");
const mongoose = require("mongoose");
const schedule = require('node-schedule');

const app = express();
app.use(express.json());

// const db = async () => {
//     try {
//         await mongoose
//             .connect("mongodb://localhost:27017/cronjobs")
//             .then(() => {
//                 console.log("DB Connected...!!!");
//                 app.listen(9000, () =>
//                     console.log("Server running on 9000...!!!")
//                 );
//             })
//             .catch((error) => console.log(error.message));
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// db();

// const userSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     roll: { type: String, required: true },
// });

// const usersCollection = mongoose.model("users", userSchema);

const job = schedule.scheduleJob('10 */1 * * * ?', () =>{
        console.log('Hello world!')
});

const newjob = schedule.scheduleJob('0 */1 * * * *', function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
  });

const date = new Date(2022, 01, 09, 16, 35, 0)
console.log(date)

const datejob = schedule.scheduleJob(date, () =>{
    console.log('Hello Earth!')
});

const teajob = schedule.scheduleJob({second:0, minute:1}, function(){
    console.log('Time for tea!');
});

const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const schedulejob = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Hello India!');
});

module.exports = app;
 