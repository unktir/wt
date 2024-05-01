var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var gallery_page = require('../controllers/galleryController');

var data = {
    title: 'Digital Project',
    page_name: 'gallery-page',
    layout,
    gallery_page
};

/* GET main page. */
router.get('/', function(req, res, next) {
    res.render('gallery-page', data);
});

module.exports = router;