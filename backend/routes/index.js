const express = require('express')
const router = express.Router()

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

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Express'})
})

module.exports = router
