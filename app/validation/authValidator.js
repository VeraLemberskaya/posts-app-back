const Joi = require("joi");

const { PASSWORD_MIN_LENGTH } = require("../constants/constants");

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(PASSWORD_MIN_LENGTH),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(PASSWORD_MIN_LENGTH),
});

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  refreshSchema,
};
