const User = require('../models/users.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports = {
    findAll: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.status(400).json(err))
    },
    register: (req, res) => {
        User.create(req.body)
        .then(newUser => {
            const userToken = jwt.sign({
                id: newUser._id
            }, process.env.SECRET_KEY);
            res
                .cookie("usertoken", userToken, {
                    // secure: true,
                    // sameSite: 'none',
                    httpOnly: true
                })
                .json({ message: "Successfully Registered!", user: newUser });
        })
        .catch(err => res.status(400).json({message: "Problem with registration", error: err}));
    },
    login: async (req, res)=> {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({message: "Invalid Log In"})
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if(!correctPassword) {
            return res.status(400).json({message: "Incorrect Password"})
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        res
            .cookie("usertoken", userToken, {
                // secure: true,
                // sameSite: 'none',
                httpOnly: true
            })
            .json({ msg: "Successfully Logged In!" });
    },  

    logout: (req, res) => {
        res.clearCookie('usertoken', {
            secure: true,
            sameSite: 'none'
        });
        res.sendStatus(200);
    }
}