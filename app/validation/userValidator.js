const Joi = require("joi");

const getByIdSchema = Joi.object({
  id: Joi.number().required(),
});

const updateSchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  avatarId: Joi.number().optional(),
});

module.exports = {
  getByIdSchema,
  updateSchema,
};
