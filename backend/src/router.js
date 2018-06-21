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
const boarders = {}

const sampleRequest = (req, res, next) => {
  res.json('tu nic nie je')
}

const registerUser = (req, res) => {
  const user = req.body
  users.push(user)
  boarders[user.email] = []
  res.status(HttpStatusCodes.OK).send()
}

const getUsers = (req, res) => {
  res.status(HttpStatusCodes.OK).json(users)
}

const addBoarder = (req, res) => {
  const {user, boarder} = req.body
  if (!boarders[user.email]) boarders[user.email] = []
  boarders[user.email].push(boarder)
  res.status(HttpStatusCodes.OK).send()
}

const getBoarders = (req, res) => {
  const {email} = req.query
  res.status(HttpStatusCodes.OK).json(boarders[email])
}

router.get('/', sampleRequest)
router.post('/register', registerUser)
router.get('/users', getUsers)
router.post('/boarder', addBoarder)
router.get('/boarders', getBoarders)

module.exports = router
