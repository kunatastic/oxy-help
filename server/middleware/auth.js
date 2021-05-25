const jwt = require("jsonwebtoken");
function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errMsg: "unauthorized" });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.id = verified.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errMsg: "unauthorized",
    });
  }
}

module.exports = auth;
