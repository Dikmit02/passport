const route = require('express').Router()

const Users = require('../db').Users

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})


route.post('/login', (req, res) => {
    Users.findOne({
        where:{
            username:req.body.username
        }
    }).then((User) => {
        if(!User){
            return res.send("NO such user")

        }
        if(User.password!==req.body.password){
            return res.send("Wrong password")
        }
        return res.send("Hello"+ User.firstName)
    })
})
route.post('/signup', (req, res) => {
    Users.create ({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createdUser) => {
        res.redirect('/login')
    })
})


exports = module.exports = route