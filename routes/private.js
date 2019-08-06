// this route should not be visible to anybody

 
const route = require('express').Router()

route.get('/', (req, res) => {
    if (req.user) {
        return res.send("Visible to only logged in users")
    } else {
        res.redirect('/login')
    }
})

exports = module.exports = route