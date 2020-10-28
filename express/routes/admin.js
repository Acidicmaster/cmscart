var express = require('express');
var router = express.Router();
let {dashboard,add_page,post_add_page} = require('../controllers/AdminController');
 
/* GET home page. */
router.get('/',dashboard);
router.get('/add-page',add_page);
router.post('/add-page',post_add_page);

module.exports = router;