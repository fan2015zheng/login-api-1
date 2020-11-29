const express = require('express')
const app = express()
const config = require('./Config')
const mwSignUp = require('./mw/SignUp')
const mwLogIn = require('./mw/LogIn')
const mwLogOut = require('./mw/Logout')
const mwVerifyEmail = require('./mw/VerifyEmail')
const mwNoRouteMatch = require('./mw/NoRouteMatch')

app.use(express.json())

app.post('/user/signup', mwSignUp)
app.post('/user/login', mwLogIn)
app.get('/user/logout', mwLogOut)
app.get('/user/verifyEmail/:token', mwVerifyEmail)
app.use('/',mwNoRouteMatch)

app.listen(config.PORT, ()=>{console.log( `Root url: ${config.ROOT_URL} | Port: ${config.PORT}`)})