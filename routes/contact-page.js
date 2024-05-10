var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var contact_page = require('../controllers/contactController');

//var { sessionCheck } = require('../models/loginsModel');

var data = {
    title: 'Digital Project',
    page_name: 'contact-page',
    layout,
    contact_page
};

/* GET main page. */
router.get('/', /* sessionCheck, */ function(req, res, next) {
    res.render('contact-page', data);
});

module.exports = router;