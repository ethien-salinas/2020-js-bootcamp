const express = require('express');
const app = express()

const port = 3000;

app.get('/', (req, res) => {
  res.end('[GET] Hello World with express')
})
  .post('/', (req, res) => {
    res.end('[POST] Root path')
  })
  .put('/', (req, res) => {
    res.end('[PUT] Root path')
  })
  .delete('/', (req, res) => {
    res.end('[DELETE] Root path')
  })

app.post('/login', (req, res) => {
  res.end(JSON.stringify({
    success: true,
    datetime: new Date().toISOString(),
    token: 'qwerty.poiuyt.asdfgh',
    msg: '[POST] /login'
  }))
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}/`)
})