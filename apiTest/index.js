const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

var mongoose = require('mongoose')

require('dotenv').config();

var userRouter = require('./routes/user');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// middleware



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then((res) => console.log("connected")).catch(err => console.log("disconnected"))


app.use("/user",userRouter);
app.listen(PORT, () => {
    console.log('started server port')
})