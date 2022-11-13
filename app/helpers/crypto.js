const bcrypt = require("bcrypt");

const saltRounds = 5;

const SALT = bcrypt.genSaltSync(saltRounds);

const hash = (data) => {
  return bcrypt.hashSync(data, SALT);
};

const compare = (data, hash) => {
  return bcrypt.compareSync(data, hash);
};

module.exports = {
  hash,
  compare,
};
