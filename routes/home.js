const express = require('express')
const router = express.Router()
const cors = require('cors');

const corsOptions = {
    origin: 'https://youtube.com',
    optionSuccessRate: 200
}


// Create initial homepage (will be website homepage eventually)
router.get('/', cors(corsOptions), function(req, res) {
    res.sendFile(__dirname + "/index.html");
    // res.send('Welcome to Provide')
});

module.exports = router