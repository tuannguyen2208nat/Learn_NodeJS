const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    app.set('views', path.join('./src', './views/'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src', 'public')))//khai báo là tất cả file ảnh, thư mục public sẽ được truy cập từ bên ngoài
    // app.use(express.static(path.join(__dirname, 'public')))
}

module.exports = configViewEngine
