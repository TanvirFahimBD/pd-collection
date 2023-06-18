const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["token-key"];
  jwt.verify(token, "SecretKey", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      req.headers.userId = decoded.data.userId;
      next();
    }
  });
};
