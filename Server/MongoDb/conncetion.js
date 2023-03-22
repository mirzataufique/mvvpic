const mongoos = require('mongoose');
// urls ='mongodb+srv://mvvpicDb:mvvpicDb@123@mvvpic-cluster.ajuej.mongodb.net/<dbname>?retryWrites=true&w=majority&ssl=true'
// url = "mongodb+srv://mvvpicDb:mvvpicDb@123@mvvpic-cluster.ajuej.mongodb.net/<dbname>?retryWrites=true&w=majority"
// mongodb+srv://mvvpicDb:mvvpicDb@123@mvvpic-cluster.ajuej.mongodb.net/?retryWrites=true&w=majority
url = "mongodb+srv://mvvpicDb:mvvpicDb@123@mvvpic-cluster.ajuej.mongodb.net/test"
const connectDB = async()=>{
    await mongoos.connect(process.env.MONGODB_URI,
         { useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(()=>{
        console.log("DB connected---->");
    }) 

} 
module.exports = connectDB;
