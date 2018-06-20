const express = require('express')
const router = express.Router()

const HttpStatusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
}

const dbConfiguration = {
  host: 'localhost',
  port: 5432,
  user: 'marcel97',
  password: 'databaza123',
  database: 'marcel97',
}

const pgp = require('pg-promise')(/*options*/)
const db = pgp(dbConfiguration)

db.any('SELECT * FROM playground', [true])
  .then((data) => {
    console.log('DATA:', data)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

// TODO connect to database
const users = []

const sampleRequest = (req, res, next) => {
  res.json([{s: 'Som king'}, {s: 'Som king'}, {s: 'Som king'}])
}

const registerUser = (req, res) => {
  users.push(req.body)
}

const getUsers = (req, res) => {
  res.status(HttpStatusCodes.OK).json(users)
}

router.get('/', sampleRequest)
router.post('/register', registerUser)
router.get('/users', getUsers)

module.exports = router
