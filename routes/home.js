const express = require('express')
const router = express.Router()

// Create initial homepage (will be website homepage eventually)
router.get('/', (req, res)=> {
    res.send('Welcome to Provider API | By Swegnesium')
})

module.exports = router