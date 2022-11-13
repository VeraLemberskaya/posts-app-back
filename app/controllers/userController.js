const userService = require("../services/userService");
const { removePassword } = require("../helpers/user");

const getAll = async (req, res) => {
  const users = await userService.getAll();
  const userDtos = users.map((user) => removePassword(user));

  return res.status(200).json(userDtos);
};

const getCurrentUser = async (req, res) => {
  const { userId: id } = req;
  const user = await userService.getById(Number(id));

  return res.status(200).json(removePassword(user));
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(Number(id));

  return res.status(200).json(removePassword(user));
};

const updateCurrentUser = async (req, res) => {
  const { userId: id } = req;
  const { email, firstName, lastName, avatarId } = req.body;

  const user = await userService.update(id, {
    email,
    firstName,
    lastName,
    avatarId,
  });

  return res.status(200).json(removePassword(user));
};

const deleteCurrentUser = async (req, res) => {
  const { userId: id } = req;
  await userService.deleteById(id);

  return res.status(204).end();
};

module.exports = {
  getCurrentUser,
  updateCurrentUser,
  deleteCurrentUser,
  getAll,
  getById,
};
