const dbcontext = require("../sequelize");

// select all data
get_request_req = function(req, res) {
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
get_request_req_by_id = function(req, res) {
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
insert_request_req = function(req, res) {
    console.log(req.body);
    dbcontext.query(
        'insert into requests (name, phone, email, interested_in, message) values (:name, :phone, :email, :interested_in, :message)',
        {
            replacements: {
                name: req.body.name,
                phone: req.body.phone_number,
                email: req.body.email,
                interested_in: req.body.interested_in,
                message: req.body.message
            },
            type: dbcontext.QueryTypes.INSERT
        }
    )
    .then(data => {
        res.json({message: "Ваш запрос получен!"});
    })
    .catch(err => {
        res.status(500).json({message: err.message});
    });
};

module.exports = {
    get_request_req,
    get_request_req_by_id,
    insert_request_req
}