const userRepository = require("../repositories/userRepository");

const create = async ({ email, firstName, lastName, hashPassword }) => {
  return await userRepository.create({
    email,
    firstName,
    lastName,
    hashPassword,
  });
};

const getAll = async () => {
  return await userRepository.findAll();
};

const getById = async (id) => {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error("User doesn't exist.");
  }

  return user;
};

const getByEmail = async (email) => {
  return await userRepository.findByEmail(email);
};

const update = async (id, user) => {
  const { email, firstName, lastName, avatarId } = user;

  return await userRepository.update(id, {
    email,
    firstName,
    lastName,
    avatarId,
  });
};

const deleteById = async (id) => {
  return await userRepository.deleteOne(id);
};

module.exports = {
  create,
  getAll,
  getById,
  getByEmail,
  update,
  deleteById,
};
