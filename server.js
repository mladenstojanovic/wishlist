var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')

var app = express()

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res) => {
    res.status(200).send({
        message: 'Welcome to API',
    })
})

app.listen('8080', () => {
    console.log('Server is running on port 8080')
})