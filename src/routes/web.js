const express = require('express')
const { getHomepage, getAbc, getTest } = require('../controllers/homeController')
const router = express.Router()

//khai báo router
router.get('/', getHomepage)

router.get('/abc', getAbc)

router.get('/test', getTest)

module.exports = router
