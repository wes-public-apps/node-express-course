// import express library
const express= require('express');
const app=express();

// create mock JSON data
const mockData = [
    {name: "mark"},
    {name: "jill"}
]

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

app.listen(8000,()=> console.log("server is running"));