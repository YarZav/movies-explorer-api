const { celebrate, Joi } = require('celebrate');
const { email, password, name } = require('./constants');

const signinRouteValidation = celebrate({
  body: Joi.object().keys({
    email,
    password,
  }),
});

const signupRouteValidation = celebrate({
  body: Joi.object().keys({
    name,
    email,
    password,
  }),
});

module.exports = { signinRouteValidation, signupRouteValidation };
