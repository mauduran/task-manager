const jwt = require("jsonwebtoken");

let authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ success: false, message: "Missing authorization header" })

    try {
        const verification = jwt.verify(token, process.env.TOKEN_SECRET);

        if (verification) {
            console.log(verification);
            req._userId = verification.userId;
            req._username = verification.username;
            return next();
        }
        throw "token not found";

    } catch (error) {
        res.status(401).json({
            error: true,
            message: "Invalid Token!"
        })
    }
}

module.exports = authMiddleware;