var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var register_page = require('../controllers/registerController');

var loginsModel = require("../models/loginsModel");

var data = {
    title: 'Digital Project',
    page_name: 'registration-page',
    layout,
    register_page
};
  
router.get('/', function(req, res, next) {
    res.render('registration-page', data);
});

router.post('/', loginsModel.register_user);
  
module.exports = router;