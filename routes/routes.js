const routes = require('express').Router();
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { signin, signup } = require('../controllers/auth');
const { signinRouteValidation, signupRouteValidation } = require('../validators/auth');
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');

routes.post('/signin', signinRouteValidation, signin);
routes.post('/signup', signupRouteValidation, signup);
routes.use('/users', auth, usersRouter);

routes.use('*', (req, res, next) => {
  next(new DocumentNotFoundError('Wrong request path'));
});

module.exports = routes;
