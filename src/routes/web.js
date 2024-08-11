const express = require('express')
const router = express.Router()

//khai báo router
router.get('/', (req, res) => {
    res.send('Hello World!123')
})

router.get('/abc', (req, res) => {
    res.send('Hello ABC!')
})

router.get('/test', (req, res) => {
    // res.send('<h1>Hello Test!</h1>')
    res.render('sample.ejs')
})

module.exports = router
