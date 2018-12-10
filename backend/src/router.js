const express = require('express')
const router = express.Router()

// To start database run:
// "sudo service postgresql start"
// then run from database directory:
// "psql -U marcel97 -d marcel97 -a -f <file.sql>"

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

const sampleRequest = (req, res, next) => {
  res.json('Nothing here!')
}

const registerUser = async (req, res) => {
  const user = req.body
  const {name, surname, email, password} = user
  // TODO: check for existing email in database
  await db.none('INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4)', [
    name,
    surname,
    email,
    password,
  ])
  res.status(HttpStatusCodes.OK).send()
}

const getUsers = async (req, res) => {
  const users = await db.any('SELECT * FROM users')
  res.status(HttpStatusCodes.OK).json(users)
}

const getUserIdFromEmail = async (email) => {
  const data = await db.one('SELECT id from users WHERE email = $1', email)
  return data.id
}

const addBoarder = async (req, res) => {
  const {user, boarder} = req.body
  const userId = await getUserIdFromEmail(user.email)
  const {name, surname, diet} = boarder
  await db.none('INSERT INTO boarders (user_id, name, surname, diet) VALUES ($1, $2, $3, $4)', [
    userId,
    name,
    surname,
    diet,
  ])
  res.status(HttpStatusCodes.OK).send()
}

const removeBoarder = async (req, res) => {
  const {user, boarder} = req.body
  const userId = await getUserIdFromEmail(user.email)
  const {name, surname, diet} = boarder
  await db.none('INSERT INTO boarders (user_id, name, surname, diet) VALUES ($1, $2, $3, $4)', [
    userId,
    name,
    surname,
    diet,
  ])
  res.status(HttpStatusCodes.OK).send()
}

const getBoarders = async (req, res) => {
  const {email} = req.query
  const userId = await getUserIdFromEmail(email)
  const boarders = await db.any('SELECT * FROM boarders WHERE user_id = $1', userId)
  res.status(HttpStatusCodes.OK).json(boarders)
}

router.get('/', sampleRequest)
router.post('/register', registerUser)
router.get('/users', getUsers)
router.post('/boarder', addBoarder)
router.get('/boarders', getBoarders)

module.exports = router
