const Movie = require('../models/movie');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.postMovies = (req, res, next) => {
  const owner = req.user._id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner,
  })
    .then((newMovie) => {
      Movie.findById(newMovie.id)
        .populate('owner')
        .then((movie) => res.status(201).send({ data: movie }));
    })
    .catch(next);
};

module.exports.deleteMovies = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail()
    .then((movie) => {
      if (movie.owner.equals(req.user._id)) {
        Movie.deleteOne(movie)
          .orFail()
          .then((deletedMovie) => res.send({ data: deletedMovie }));
      } else {
        next(new ForbiddenError('Wrong movie id'));
      }
    })
    .catch(next);
};
