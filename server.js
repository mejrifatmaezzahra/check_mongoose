const express = require("express");
const connect = require("./config/connectDB");


//instantiation
const app = express();


// middlewware
app.use(express.json());


// connect to DB
connect();


//route
app.use("/api/persons", require("./routes/person"));



//port
const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});