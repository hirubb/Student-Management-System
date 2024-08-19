
//importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//assing a port to in the local host
const PORT = process.env.PORT || 8070;  //assign 8070 port if it is available : if not assign to an available port

app.use(cors());
app.use(bodyParser.json());

//import url of the db
const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})


.then(()=>{
    console.log("db connected");
}).catch((err)=>console.log(err)
);

//create the connnection
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongodb connection successfull");
    
});

//open the app in the assigned port
app.listen(PORT,() => {
    console.log(`server is up and running on port : ${PORT}`);
})

const studentRouter = require("./routes/Students.js"); //Add students.js file



app.use("/student",studentRouter);

app.listen(PORT,() => {
    console.log(`server is up and running on port number: ${PORT}`)
})