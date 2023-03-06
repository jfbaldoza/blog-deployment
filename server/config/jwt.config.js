const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY

module.exports.secret = process.env.secret

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) { 
            res.status(401).json({message: 'Unauthorized user'});
            } else {
            next();
            }
    });
}