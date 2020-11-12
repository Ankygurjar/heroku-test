const express = require('express')

const app = express()

const PORT = process.env.PORT || 5500

const data = require('./data.json')

app.use(express.static('client'))

app.get('/', (req:any, res:any)=>{
    res.sendFile(__dirname + './../client/index.html')
})

app.get('/players' ,(req:any, res:any)=>{
    res.send(data)
})

app.listen(PORT, ()=>{
    console.log(`Server is up and running at port ${PORT}`)
})