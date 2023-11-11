

const express = require('express')
const {  postOrder } = require('../controllers/ordersControls')
 
const router = express.Router()

router.route('/').post(postOrder)


module.exports = router