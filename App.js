const express = require('express')
const app = express()
const config = require('./Config')

app.get('/',(req,res)=>{
  res.send("hello world")
})

app.listen(config.PORT, ()=>{
  console.log( `Root url: ${config.ROOT_URL}`)
  console.log(`Port: ${config.PORT}`)
})