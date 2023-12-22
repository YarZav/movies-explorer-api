const moviesRouter = require('express').Router();
const { getMovies, postMovies, deleteMovies } = require('../controllers/movies');
const { moviesRouteValidation, moviesIdRouteValidation } = require('../validators/movies');

moviesRouter.get('', getMovies);
moviesRouter.post('', moviesRouteValidation, postMovies);
moviesRouter.delete('/:id', moviesIdRouteValidation, deleteMovies);

module.exports = moviesRouter;
