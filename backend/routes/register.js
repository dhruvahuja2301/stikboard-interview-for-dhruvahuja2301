const express = require('express');
const router =  express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

router.route("/").post(async (req,res)=>{
    const { name, email, password } = req.body;

    // simple validation
    if(!name || !email || !password){
        res.status(400).json({message: 'Please enter all fields'})
    }

    try {
        const userfind = await User.findOne({ email })
        // existing user?
        if (!userfind) {
            // create hash
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const newUser = User({name, email, password: hash});
            // console.log(newUser);
            // save user
            const user = await newUser.save();
            // create jwt token
            const token = await jwt.sign(
                {id: user.id},
                process.env.JWT_SECRET,
                {expiresIn: 3600}  
            );
            // console.log(token)
            res.json({
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });
        }
        else {
            res.status(400).json({message: 'User already registered with the email'})
        }
    } catch (err) {
        res.status(500).json({message: "Registration Failed"})
    }
});

module.exports = router