const User = require('../models/User');

// signin controllers
module.exports.signup_get = (req, res) => {
    res.render('signup')
};
module.exports.signup_post = async(req, res) => {

    const { username, password } = req.body
    console.log(username, password)
    try {
        const new_user = await User.create({ username, password })
        res.status(200).json(new_user)
    } catch (err) {
        console.log(err)
        res.send('user not created')
    }
    res.send({ 'name': 'signup' })
};

// login controllers
module.exports.login_get = (req, res) => {
    res.render('login')
};
module.exports.login_post = (req, res) => {
    res.send({ 'name': 'login' })
};