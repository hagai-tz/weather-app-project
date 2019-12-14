//server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')

//middlewhere
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

// DB setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weatherDB', {useNewUrlParser: true})

//require folders

//listen port
const port = 3000
app.listen(port, function(){
    console.log("The server is up and running on port " + port)
})


// const apiKey = "613dea6ca2fc442863e5a75447bae338"
