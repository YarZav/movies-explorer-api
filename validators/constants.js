const { Joi } = require('celebrate');

const email = Joi.string().min(3).required().email();
const password = Joi.string().required();
const name = Joi.string().min(2).max(30);

module.exports = { email, password, name };
