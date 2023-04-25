var authMgr = require('../api/auth/authMgr');


exports.loadRoutes  = function(app){
    //Call every Route here

    // By using app.route we will call both get and post request.
    app.route('/api/v1/login')
    .post(authMgr.login) // Login API

    app.route('/api/v1/register')
    .post(authMgr.register) // Register API
}