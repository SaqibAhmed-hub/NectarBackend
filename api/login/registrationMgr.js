var registrationDA = require('./registrationDA')

exports.login = (req, res) => {
    try {
        registrationDA.login(req, res);
    } catch (error) {
        console.log(error);
    }
}