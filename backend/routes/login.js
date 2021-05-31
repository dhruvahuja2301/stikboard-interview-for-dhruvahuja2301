const express = require('express');
const router =  express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

router.route("/").post(async (req,res)=>{
    const { email, password } = req.body;

    // simple validation
    if(!email || !password){
        res.status(400).json({message: 'Please enter all fields'})
    }

    try {
        const user = await User.findOne({ email })
        // existing user?
        if (!user) {
            res.status(400).json({message: 'User does not exists'});
        } else {
            // validate password
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                res.status(400).json({message: 'Password is incorrect'});
            }
            else {
                const token = jwt.sign(
                    {id: user.id},
                    process.env.JWT_SECRET,
                    {expiresIn: 3600}  
                );
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                });
            }
        }
    } catch (err) {
        res.status(500).json({message: "Login Failed"})
    }
});

module.exports = router