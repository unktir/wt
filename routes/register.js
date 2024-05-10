var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var register_page = require('../controllers/registerController');

var loginsModel = require("../models/loginsModel");

// router.get('/', function(req, res) {
//     res.render('register', { 
//       title: 'Whitesquare',
//       pname: 'AUTH',
//       navmenu: navmenu });
// });

var data = {
    title: 'Digital Project',
    page_name: 'register-page',
    layout,
    register_page
};
  
router.get('/', function(req, res, next) {
    res.render('register-page', data);
});

router.post('/', loginsModel.register_user);
  
module.exports = router;