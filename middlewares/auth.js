const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { secret, bearerHeader, wrongLoginOrPasswordMessage } = require('../constants/constants');

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
