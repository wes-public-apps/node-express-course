// import express library
const express= require('express');
const app=express();
const bodyParser = require('body-parser'); // for post requests

// register necessary libraries
app.use(bodyParser.json());

// create mock JSON data
const mockData = [
    {name: "mark"},
    {name: "jill"}
]

// handle get requests
app.get('/users',(req,res)=>{
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockData
    });
});

app.get('/users/:id',(req,res)=>{
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'successfully got a user.',
        users: req.params.id
    });
});

//handle post requests
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const mockUserName = "username";
    const mockPassword = "password";

    if(username===mockUserName && password===mockPassword){
        res.json({
            success: true,
            message: "access granted",
            token: 'cookie'
        });
    }else{
        res.json({
            success: false,
            message: "username or password incorrect"
        });
    }
})

app.listen(8000,()=> console.log("server is running"));