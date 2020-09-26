const express = require('express')
const router = express.Router()
const DB = require('../db')
const db = new DB('storage.sqlite')
const bcrypt = require('bcrypt')


router.post('/login', (req, res) => {
  res.send('[POST] /login')
})
router.post('/register', (req, res) => {
  res.send(JSON.stringify({
    msg: '[POST] /register',
    values: [
      req.body.name,
      req.body.email,
      bcrypt.hashSync(req.body.password, 9),
    ]
  }))
})

module.exports = router