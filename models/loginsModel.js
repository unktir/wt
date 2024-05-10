register_user = function(req, res) {
    if (!req.body.loginField || !req.body.emailField || !req.body.passField) {
        res.status(400).json({ message: "The data entered are not correct!" });
    return;
    }
    const salt = bcrypt.genSaltSync();
    var hashed = bcrypt.hashSync(req.body.passField, salt);
    dbcontext.query(
        'insert into logins (username, password, email) values (:username, :password, :email)',
        {
            replacements: {
                username: req.body.loginField,
                password: hashed,
                email: req.body.emailField
            },
            type: dbcontext.QueryTypes.INSERT
        }
    )
    .then(result => {
        console.log(`Registered as ${req.body.loginField}`);
        res.redirect('/login');
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
};

login_user = function(req, res) {
    var login = req.body.loginField;
    var password = req.body.passField;
    dbcontext.query(
        'SELECT * FROM logins WHERE "username" = :username',
        {
            replacements: {
                username: login
            },
            type: dbcontext.QueryTypes.SELECT
        }
    ).then(data => {
        var user = data[0]
        if (!user) {
            res.redirect('/login');
        } else if (!bcrypt.compareSync(password, user.password)) {
            res.redirect('/login');
        } else {
            req.session.user = user.username;
            req.session.userId = user.id;
            res.cookie('AuthToken', user.username);
            res.redirect('/');
        }
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
}

sessionCheck = (req, res, next) => {
    if (!req.session.user || req.cookies['AuthToken'] != req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }    
};

module.exports = {
    register_user,
    login_user,
    sessionCheck
}