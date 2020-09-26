require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.end(JSON.stringify({
    success: true,
    datetime: new Date().toISOString(),
    msg: 'AUTH API'
  }))
})
app.use(routes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}/`)
})