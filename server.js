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

app.listen(8000,()=> console.log("server is running"));