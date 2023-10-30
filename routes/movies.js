const cardsRouter = require('express').Router();
const { getMovies, postMovies, deleteMovies } = require('../controllers/movies');
const { moviesRouteValidation, moviesIdRouteValidation } = require('../validators/movies');

cardsRouter.get('', getMovies);
cardsRouter.post('', moviesRouteValidation, postMovies);
cardsRouter.delete('/:id', moviesIdRouteValidation, deleteMovies);

module.exports = cardsRouter;
