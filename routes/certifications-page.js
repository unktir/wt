var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var certifications_page = require('../controllers/certificationsController');

var data = {
    title: 'Digital Project',
    page_name: 'certifications-page',
    layout,
    certifications_page
};

/* GET main page. */
router.get('/', function(req, res, next) {
    res.render('certifications-page', data);
});

module.exports = router;