const resister = (req, res, next) => {
  res.send("register endpoint!");
};

const login = (req, res, next) => {
  res.send("login endpoint!");
};

export { resister, login };
