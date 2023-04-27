var jwt = require('jsonwebtoken');
var registerModel = require('../../model/registerModel')


//Login 
exports.login = (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        try {
          registerModel.findOne({ email: email })
                .select('password')
                .exec(
                    function (err, data) {
                        if(err) {
                            res.status(500).json(err);
                        }
                        if (!data) {
                            return res.status(400).send({
                                statusCode: 400,
                                error: 'Invalid Request',
                                message: 'Incorrect username or password'
                            })
                        } else if (data.password != password) {
                            return res.status(400).send({
                                statusCode: 400,
                                error: 'Invalid Request',
                                message: 'Incorrect username or password'
                            })
                        } else {
                            //User Successful
                            let token = jwt.sign({
                                userId: email
                            },
                                'secretkeyappearshere',
                                { expiresIn: '1h' }
                            )
                            return res.status(200).send({
                                statusCode: 200,
                                message: 'Login Successfully',
                                data: {
                                    email: email,
                                    token: token
                                }
                            })
                        }
                    }
                );

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                statusCode: 500,
                message: 'Oops! Something went wrong here...',
                error: e.message
            })
        }

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            statusCode: 500,
            message: 'Oops! Something went wrong here...',
            error: e.message
        })
    }
}

//Registration
exports.register = (req, res) => {
    try {
        let email = req.body.email
        let password = req.body.password
        let fullName = req.body.fullName
        registerModel.find({ email: email }).select().exec(async function (err, data) {
            if (data.length !== 0) {
                res.status(400).send({
                    statusCode: 400,
                    error: 'Invalid Request',
                    message: 'User Already Exists'
                })
            } else {
                var register = new registerModel()
                register.email = email;
                register.password = password;
                register.fullName = fullName;
                register.createdAt = Date.now();
                await register.save();
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Register Successfully',
                })
            }
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            statusCode: 500,
            message: 'Oops! Something went wrong here...',
            error: err.message
        })
    }
}