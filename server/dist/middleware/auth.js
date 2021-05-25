"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
function auth(req, res, next) {
    try {
        var token = req.cookies.token;
        if (!token)
            return res.status(401).json({ errMsg: "unauthorized" });
        var verified = jwt.verify(token, process.env.JWT_SECRET);
        req.id = verified.id;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).json({
            errMsg: "unauthorized",
        });
    }
}
module.exports = auth;
