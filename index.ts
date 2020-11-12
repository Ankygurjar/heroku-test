const express = require('express')

const app = express()

const SERVER_PORT:number = 5500

app.get('/', (req :any, res:any)=>{
    res.status(200).json("Server is good")
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is up and running at port ${SERVER_PORT}`)
})