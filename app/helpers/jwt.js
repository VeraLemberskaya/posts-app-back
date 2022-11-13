const jwt = require("jsonwebtoken");

const generate = (payload, secretKey, ttl) => {
  return jwt.sign(payload, secretKey, { expiresIn: ttl });
};

const verify = (token, secretKey) => {
  return jwt.verify(token, secretKey);
};

const decode = (token) => {
  return jwt.decode(token);
};

module.exports = {
  generate,
  verify,
  decode,
};
