const jwt = require('jsonwebtoken');

const authenToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) return res.status(401).json('not authorized')
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
         if(err) return res.status(403);
         req.user = user
         next()
    })
}
module.exports = {authenToken}