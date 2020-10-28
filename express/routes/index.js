var express = require('express');
var router = express.Router();
let {index} = require('../controllers/homeController');
 
/* GET home page. */
router.get('/',index);

module.exports = router;
