require("dotenv").config();
const jwt = require("../helpers/jwt");
const crypto = require("../helpers/crypto");
const { removePassword } = require("../helpers/user");
const userService = require("./userService");

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_ACCESS_TTL = process.env.JWT_ACCESS_TTL;
const JWT_REFRESH_TTL = process.env.JWT_REFRESH_TTL;

const generateTokenPair = (payload) => {
  const accessToken = jwt.generate(payload, JWT_ACCESS_SECRET, JWT_ACCESS_TTL);
  const refreshToken = jwt.generate(
    payload,
    JWT_REFRESH_SECRET,
    JWT_REFRESH_TTL
  );

  return {
    accessToken,
    refreshToken,
  };
};

const register = async ({ email, firstName, lastName, password }) => {
  try {
    const user = await userService.getByEmail(email);

    if (user) {
      throw new Error("User already exists.");
    }

    const hashPassword = crypto.hash(password);

    const createdUser = await userService.create({
      email,
      firstName,
      lastName,
      hashPassword,
    });

    return removePassword(createdUser);
  } catch (err) {
    throw new Error(err);
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await userService.getByEmail(email);

    const isPasswordValid = crypto.compare(password, user.hashPassword);

    if (!isPasswordValid) {
      throw new Error("Password isn't correct.");
    }

    const payload = { id: user.id };
    const tokenPair = generateTokenPair(payload);

    return {
      user: removePassword(user),
      tokens: tokenPair,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const refreshToken = (refreshToken) => {
  try {
    const userData = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

    const payload = { id: userData.id };
    const tokenPair = generateTokenPair(payload);

    return {
      tokens: tokenPair,
    };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  register,
  login,
  refreshToken,
};
