const e = require('express');
const express = require('express')
const path = require('path')
require('dotenv').config()

// console.log(">>> check env: ", process.env)

const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs')

//config static folder
app.use(express.static(path.join(__dirname, 'public')))//khai báo là tất cả file ảnh, thư mục public sẽ được truy cập từ bên ngoài

//khai báo router
app.get('/', (req, res) => {
    res.send('Hello World!123')
})

app.get('/abc', (req, res) => {
    res.send('Hello ABC!')
})

app.get('/test', (req, res) => {
    // res.send('<h1>Hello Test!</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})