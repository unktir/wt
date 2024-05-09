var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var main_page = require('../controllers/mainController');

var data = {
    title: 'Digital Project',
    page_name: 'main-page',
    layout,
    main_page
};

/* GET main page. */
router.get('/', function(req, res, next) {
    res.render('main-page', data);
});

module.exports = router;
