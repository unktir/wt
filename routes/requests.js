var express = require('express');
var router = express.Router();
var requestsModel = require("../models/requestsModel");

router.get('/', requestsModel.get_request_req);
router.get('/:id', requestsModel.get_request_req_by_id);
router.post('/', requestsModel.insert_request_req);
//router.put('/:id', requestsModel.update_request_req);
//router.delete('/:id', requestsModel.delete_request_req);

module.exports = router;