const express= require('express');

const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

const server= express();

server.use(express.json());
server.use(logger);

server.use('/api/actions',actionRouter);
server.use('/api/projects',projectRouter);

server.get('/', (req,res)=>{
    res.send(`<h1> You chose the correct API </h1>`)
})

function logger(req,res,next){
    console.log(` ${req.method} on ${req.url}`)
    next();
}

module.exports= server;