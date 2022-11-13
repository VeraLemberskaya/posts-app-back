const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async ({ email, hashPassword, firstName, lastName }) => {
  return await prisma.user.create({
    data: {
      email,
      hashPassword,
      firstName,
      lastName,
    },
  });
};

const findAll = async () => {
  return await prisma.user.findMany();
};

const findById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

const findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

const update = async (
  id,
  { email, hashPassword, firstName, lastName, avatarId }
) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      hashPassword,
      firstName,
      lastName,
      avatarId,
    },
  });
};

const deleteOne = async (id) => {
  return await prisma.user.delete({
    where: { id },
  });
};

module.exports = {
  create,
  findAll,
  findById,
  findByEmail,
  update,
  deleteOne,
};
