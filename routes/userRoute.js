const express = require('express')
const router = express.Router()
const {getAllTheatre,getAllMovie,getAllDate,getBookingAvailability} = require('../controller/userController')
const auth = require('../middleware/auth')

// router.route('/').post(getAllServiceCenter)
router.get('/',getAllTheatre)
router.get('/availability',getBookingAvailability)
router.post('/movie',getAllMovie)
router.post('/date',getAllDate)

module.exports = router