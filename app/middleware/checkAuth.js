require("dotenv").config();
const jwt = require("../helpers/jwt");

const accessSecret = process.env.JWT_ACCESS_SECRET;

const checkAuth = (req, res, next) => {
  const authorizationHeader = req.headers.authorization || "";
  const token = authorizationHeader.split(" ")[1];

  if (token) {
    try {
      const payload = jwt.verify(token, accessSecret);
      const { id } = payload;
      req.userId = id;
      next();
    } catch (err) {
      throw new Error(err);
    }
  } else {
    res.status(401).end("User is not authorized.");
  }
};

module.exports = checkAuth;
