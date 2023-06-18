const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  let token = req.headers["token-key"];
  jwt.verify(token, "SecretKey", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      return res.status(200).json({ userId: decoded.data.userId });
    }
  });
};
