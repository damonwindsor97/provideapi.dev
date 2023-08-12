const express = require('express')
const router = express.Router()
const cors = require('cors');

const corsOptions = {
    origin: 'https://youtube.com',
    optionSuccessRate: 200
}


// Create initial homepage (will be website homepage eventually)
router.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
    // res.send('Welcome to Provide')
});

// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
//     //__dirname : It will resolve to your project folder.
//   });
   

module.exports = router