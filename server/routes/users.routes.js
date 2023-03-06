const UserContoller = require('../controllers/users.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/api/register", UserContoller.register);
    app.get("/api/users", authenticate, UserContoller.findAll);
    app.get('/api/logout', UserContoller.logout);
    app.post('/api/login', UserContoller.login);
}