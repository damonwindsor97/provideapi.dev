const express = require('express')
const router = express.Router()

// Create initial homepage (will be website homepage eventually)
router.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

module.exports = router