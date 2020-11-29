const express = require('express')
const app = express()
const config = require('./Config')

app.get('/',(req,res)=>{
  res.send("hello world")
})
console.log("==================")
console.log(config)
console.log("==================")

app.listen(process.env.PORT || 5000)