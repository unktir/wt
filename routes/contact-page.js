var express = require('express');
var router = express.Router();

var layout = require('../controllers/layoutController');
var contact_page = require('../controllers/contactController');

var data = {
    title: 'Digital Project',
    page_name: 'contact-page',
    layout,
    contact_page
};

/* GET main page. */
router.get('/', function(req, res, next) {
    res.render('contact-page', data);
});

/* POST main page contact form */
router.post("/ajaxrequest", function (req, res) {
    console.log(req.body);
    if(!req.body) return response.sendStatus(400);
    try {
      var message = "Ваш запрос получен!";
    } catch(err) {
      console.error(err);
    }
  
    res.json({ message });
});

module.exports = router;