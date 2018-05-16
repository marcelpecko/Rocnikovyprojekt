const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json([{s: 'Som king'}, {s: 'Som king'}, {s: 'Som king'}])
})

module.exports = router
