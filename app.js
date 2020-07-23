const http = require('http');

const express = require('express');
const { nextTick } = require('process');

const app = express()

app.use((req,res,next)=>{
    console.log("First ");
    next();
});

app.use((req,res,next)=> {
    console.log("Second");
    res.send(`<h1>Hello</h1>`)
})

app.listen(3000);