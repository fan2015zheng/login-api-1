const dotenv = require('dotenv')

if(!process.env.heroku) {
  dotenv.config()
}

let port = 5000
let rootUrl = `http://localhost:${port}`

if(process.env.heroku){
  const herokuAppName = "fan-login"
  port = process.env.PORT
  rootUrl = `https://${herokuAppName}.herokuapp.com`
} 


module.exports = {
  PORT: port,
  ROOT_URL: rootUrl
}