
const getHomepage = (req, res) => {
    res.send('Hello World!123')
}

const getAbc = (req, res) => {
    res.send('Hello ABC!')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getAbc,
    getTest
}