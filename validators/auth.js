const { celebrate, Joi } = require('celebrate');

const signinRouteValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().min(3).required().email(),
    password: Joi.string().required(),
  }),
});

const signupRouteValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().required(),
  }),
});

module.exports = { signinRouteValidation, signupRouteValidation };
