const { celebrate, Joi } = require('celebrate');

const usersMeRouteValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().min(3).required().email(),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports = { usersMeRouteValidation };
