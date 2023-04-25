var authDA = require('./authDA')

exports.login = (req, res) => {
    try {
        authDA.login(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.register = (req,res) => {
    try {
        authDA.register(req,res);
    } catch (error) {
        console.log(error);
    }
}