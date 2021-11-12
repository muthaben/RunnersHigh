const router = require('express').Router()
const controllers = require('../controllers')

router.get('/room', controllers.rooms)
router.post('/room', controllers.room)
router.get('/message', controllers.messages)
router.post('/message', controllers.message)

module.exports = router
