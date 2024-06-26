const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
router.get('/file(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'file.html'))
})

module.exports = router;