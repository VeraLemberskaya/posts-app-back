const authService = require("../services/authService");

const register = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  const user = await authService.register({
    email,
    firstName,
    lastName,
    password,
  });

  return res.status(201).json({
    user,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userData = await authService.login({ email, password });

  return res.status(200).send(userData);
};

const refresh = (req, res) => {
  const { refreshToken } = req.body;

  const tokens = authService.refreshToken(refreshToken);

  return res.status(200).send(tokens);
};

module.exports = {
  register,
  login,
  refresh,
};
