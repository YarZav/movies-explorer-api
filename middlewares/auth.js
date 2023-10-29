const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { secret } = require('../constants/constants');

const wrongLoginOrPasswordMessage = 'Неправильный логин или пароль';
const bearerHeader = 'Bearer ';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith(bearerHeader)) {
    next(new UnauthorizedError(wrongLoginOrPasswordMessage));
  }

  const token = authorization.replace(bearerHeader, '');

  try {
    req.user = jwt.verify(token, secret);
  } catch (err) {
    next(new UnauthorizedError(wrongLoginOrPasswordMessage));
  }

  next();
};
