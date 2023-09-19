const router = require('express').Router()

router.post('/', async (req, res) => {
  res.json({ msg: 'Register Lawyer' })
})

module.exports = router
