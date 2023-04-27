var productDA = require('./productDA');

exports.getExclusiveProduct = (req,res) => {
    try {
        productDA.getExclusiveOffer(req, res);
    } catch (error) {
        console.log(error);
    }
}