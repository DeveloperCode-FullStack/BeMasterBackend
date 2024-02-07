const auth = require('../auth/auth');

module.exports = function checkAuth(){
    function middleware (req, res, next) {
        auth.checkAuth.confirmarToken(req);
        next();
    }
    return middleware;
}