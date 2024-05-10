var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var login_page = require('../controllers/loginConroller');

var loginsModel = require("../models/loginsModel");

// router.get('/', function(req, res) {
//     res.render('login', { 
//       title: 'Whitesquare',
//       pname: 'AUTH',
//       navmenu: navmenu });
// });

var data = {
    title: 'Digital Project',
    page_name: 'login-page',
    layout,
    login_page
};
  
router.get('/', function(req, res, next) {
    res.render('login-page', data);
});

router.post('/', (req, res) => {
    if (!req.body.regBtn) {
      loginsModel.login_user(req, res);
    }
    else res.redirect('/register');
  });
  
module.exports = router;