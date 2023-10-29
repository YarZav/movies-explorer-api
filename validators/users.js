const { celebrate, Joi } = require('celebrate');
const { email, name } = require('./constants');

const usersMeRouteValidation = celebrate({
  body: Joi.object().keys({
    email,
    name,
  }),
});

module.exports = { usersMeRouteValidation };
