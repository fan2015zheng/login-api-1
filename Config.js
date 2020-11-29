const dotenv = require('dotenv')

if(!process.env.heroku) {
  dotenv.config()
}

let PORT = 5000
let rootUrl = `http://localhost:${PORT}`

if(process.env.heroku){
  const herokuAppName = "fan-login"
  PORT = process.env.PORT
  rootUrl = `https://${herokuAppName}.herokuapp.com`
} 


module.exports = {
  PORT: PORT,
  ROOT_URL: rootUrl
}