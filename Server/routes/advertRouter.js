
const {  getAdvert } = require( '../controllers/advertControl')
const express = require('express')
const router = express.Router()

router.route('/').get(getAdvert)


module.exports = router
