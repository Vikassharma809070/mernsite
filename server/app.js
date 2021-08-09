require("dotenv").config();
const express = require('express');
const app = express();
let morgan = require("morgan")
require("./db/conn")

app.use(express.json());
app.use(morgan("dev"))

app.use(require('./router/auth'));

const PORT = process.env.PORT; 


const middleware = (req,res,next)=>{
    console.log('hello my middleware');
    next();
} 

app.get('/about',middleware,(req,res)=>{
    console.log('Helloworld my about');
    res.send("Hello about From the Server");

})
app.get('/contact',(req,res)=>{
    res.cookie("Test","vikas");
    res.send("Hello contact From the Server");

})
app.get('/signin',(req,res)=>{
    res.send("Hello signin From the Server");

})
app.get('/signup',(req,res)=>{
    res.send("Hello signup From the Server");

})

app.listen(PORT,()=>{
    console.log(`server is running at port no is ${PORT}`);
})



