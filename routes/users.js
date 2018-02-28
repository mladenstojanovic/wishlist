var { MongoClient } = require('mongodb')

var { User } = require('./../models/user')

function userRoutes(app) {
    app.post('/users', (req, res) => {
        var body = req.body

        new User(body).save().then((newUser) => {
            res.send({
                data: {
                    message: 'User created'
                }
            })
        }).catch((err) => {
            res.status(400).send(err)
        })
    })
}

module.exports = { userRoutes }