const routes = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { signin, signup } = require('../controllers/auth');
const { signinRouteValidation, signupRouteValidation } = require('../validators/auth');
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');
const { wrongRequestPath } = require('../constants/constants');

routes.post('/signin', signinRouteValidation, signin);
routes.post('/signup', signupRouteValidation, signup);
routes.use('/users', auth, usersRouter);
routes.use('/movies', auth, moviesRouter);

routes.use('*', auth, (req, res, next) => {
  next(new DocumentNotFoundError(wrongRequestPath));
});

module.exports = routes;
