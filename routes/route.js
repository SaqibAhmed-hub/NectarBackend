var registrationMgr = require('../api/login/registrationMgr');


exports.loadRoutes  = function(app){
    //Call every Route here

    // By using app.route we will call both get and post request.
    app.route('/api/v1/login')
    .get(registrationMgr.login)
    .post((req,res) =>{

    }) // Login API
}