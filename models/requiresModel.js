const { dbcontext } = require("../app")

// select all data
exports.get_request_req = function(req, res) {
    dbcontext.query(
        'select * from requests',
        {
            type: dbcontext.QueryTypes.SELECT
        }
    )
    .then(data => {
        res.json(data[0]);
    })
    .catch(err => {
        res.status(500).json({message: err.message});
    });
};
// select data by id
exports.get_request_req_by_id = function(req, res) {
    dbcontext.query(
        'select * from requests where id = :id',
        {
            replacements: {id: req.params.id},
            type: dbcontext.QueryTypes.SELECT
        }
    )
    .then(data => {
        res.json(data[0]);
    })
    .catch(err => {
        res.status(500).json({message: err.message});
    });
};
// insert data
exports.insert_request_req = function(req, res) {
    dbcontext.query(
        'insert into requests ( :name , :phone , :email , :interested_in , :message)',
        {
            replacements: {
                name: req.params.name,
                phone: req.params.phone,
                email: req.params.email,
                interested_in: req.params.interested_in,
                message: req.params.message
            },
            type: dbcontext.QueryTypes.INSERT
        }
    )
    .then(data => {
        res.json(data[0]);
    })
    .catch(err => {
        res.status(500).json({message: err.message});
    });
};