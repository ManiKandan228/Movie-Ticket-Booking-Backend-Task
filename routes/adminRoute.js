const express = require('express')
const router = express.Router()
const {getAllDetails,addNewMovie,addNewTheatre,getAllbookings} = require('../controller/adminController')
const auth = require('../middleware/auth')

// router.route('/').post(getAllServiceCenter)
router.post('/',getAllDetails)
router.post('/addMovie',addNewMovie)
router.post('/addTheatre',addNewTheatre)
router.get('/booking',getAllbookings)
module.exports = router