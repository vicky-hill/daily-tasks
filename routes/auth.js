const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { protect } = require('../middleware/auth');
require('dotenv').config();


// POST api/user/register  [Register new user]
router.post('/register', async (req, res) => {
    try {
        const { name, password, role } = req.body;

        let user = await User.findOne({ name });
    
        if (user) {
            return res.status(400).json({ msg : 'Username is taken!' });
        }
    
        user = new User({ name, password, role });
 
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
    
        await user.save();
    
        const payload = { user: {name: user.name, id: user.id} }
    
        jwt.sign(payload, 'whitecat', (err, token) => {
            if(err) throw err;
            res.status(200).json({ token }); 
        });  
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something didnt work right' });
    }
});


// POST api/auth/login  [Login user]
router.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;

        let user = await User.findOne({ name });
    
        if (!user) {
            return res.status(400).json({ msg: 'Username or password invalid!'});
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
            return res.status(400).json({ msg: 'Username or password invalid!'});
        }
    
        const payload = { user: {name: user.name, id: user._id} };
    
        jwt.sign(payload, 'whitecat', (err, token) => {
            if(err) throw err;
            res.json({ token, id: user._id });
        })
    } catch (err) {
        res.status(500).json({ msg: 'Something didnt work right'});
    }
});

// GET api/auth  [Get logged in user info]
router.get('/', protect, async (req, res) => {

    const user = await User.findById(req.user.id).select('-password');

    res.status(200).json(user);
})

module.exports = router;