var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var projects_page = require('../controllers/projectsController');

var data = {
    title: 'Digital Project',
    page_name: 'projects-page',
    layout,
    projects_page
};

/* GET main page. */
router.get('/', function(req, res, next) {
    res.render('projects-page', data);
});

module.exports = router;