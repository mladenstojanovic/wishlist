var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')

var { mongoose } = require('./db/mongoose')
var { userRoutes } = require('./routes/users')

var app = express()

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

userRoutes(app)

app.listen('8080', () => {
    console.log('Server is running on port 8080')
})