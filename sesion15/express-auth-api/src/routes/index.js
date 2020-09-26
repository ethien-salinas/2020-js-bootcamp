const express = require('express')
const router = express.Router()
const DB = require('../db')
const db = new DB('storage.sqlite')
const bcrypt = require('bcrypt')


router.post('/login', (req, res) => {
  res.send('[POST] /login')
})
router.post('/register', (req, res) => {
  db.insert([
    req.body.name,
    req.body.email,
    bcrypt.hashSync(req.body.password, 9),
  ],
    (err) => {
      if (err)
        return res.status(500).send({
          success: false,
          msg: `there was a problem registering the user ${req.body.email}`,
          err
        })
      res.status(200).send({
        success: true,
        user: [req.body.name, req.body.email]
      })
    }
  )
})

module.exports = router