const usersRouter = require('express').Router();
const { getUsersMe, patchUsersMe } = require('../controllers/users');
const { usersMeRouteValidation } = require('../validators/users');

usersRouter.get('/me', getUsersMe);
usersRouter.patch('/me', usersMeRouteValidation, patchUsersMe);

module.exports = usersRouter;
