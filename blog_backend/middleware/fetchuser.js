const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

const JWT_SECRET = `${process.env.JWT_SECRET}`;

const fetchuser = async(req,res,next)=>{
    //get user from jwt token and id to req object
    const token = req.header("auth-token");
    if(!token){
        return res.status(401).send({error: "Please authenticate with proper credentials"});
    }

    try {
        const data = jwt.verify(token,JWT_SECRET);
        // console.log(data);
        req.user=data.user;
        next();
    } catch (error) {
        return res.status(401).send({error: "Please authenticate"});
    }
}

module.exports = fetchuser;