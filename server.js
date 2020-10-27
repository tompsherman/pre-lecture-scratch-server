const express = require('express')
require('colors')

const PORT = 5000

const server = express()
server.use(express.json())

server.get('/', (req,res)=>{
    res.send('hello new world here we come')
})

server.get('/hobbits', (req,res)=>{
    res.send('welcome to hobbittown (sigh)')
})

server.post('/hobbits', (req, res)=> {
    res.status(201).json({url: "/hobbits", operation: "POST"})
})

server.put('/hobbits', (req,res)=>{
    res.status(200).json({url: "/hobbits", operation: "PUT"})
})

server.delete('/hobbits', (req,res)=>{
    res.status(204)
})


server.listen(PORT, ()=>{
    console.log(`\n ***server listening on port ${PORT}`.red.inverse)
})