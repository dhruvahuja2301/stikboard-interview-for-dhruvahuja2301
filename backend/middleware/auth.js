const jwt = require('jsonwebtoken');
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const auth = ((req, res, next) => {
    const token = req.header('x-auth-token');
    // token checking
    if(!token){
        res.status(401).json({message: "No token, Authorization denied"})
    }
    try {
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // add user from payload to req.user
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({message: "Token is not valid"})       
    }
});

module.exports = auth;
// for every request to check for authentication add auth as a parameter in routes before ,(req,res)