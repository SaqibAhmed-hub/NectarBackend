var productModel = require('../../model/productModel');

exports.getExclusiveOffer = (req, res) => {
    try {
        productModel.find({}).select().exec((err, data) => {
            if (err) {

            } else {
                res.statusCode(201).send({
                    statusCode: 201,
                    message: 'Exclucive Offer',
                    data : [data]
                }
                )
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            statusCode: 500,
            message: 'Oops! Something went wrong here...',
            error: error.message
        })
    }
}
