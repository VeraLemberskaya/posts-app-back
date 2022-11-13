const removePassword = (user) => {
  delete user.hashPassword;
  return user;
};

module.exports = {
  removePassword,
};
