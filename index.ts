const express = require('express')

const app = express()

const SERVER_PORT:number = 5500

app.use(express.static('client'))

app.get('/', (req:any, res:any)=>{
    res.sendFile(__dirname + './../client/index.html')
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is up and running at port ${SERVER_PORT}`)
})