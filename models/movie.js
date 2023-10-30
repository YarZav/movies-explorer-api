const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      trim: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: validator.isURL,
        message: 'Incorrect image',
      },
    },
    trailerLink: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: validator.isURL,
        message: 'Incorrect trailerLink',
      },
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: validator.isURL,
        message: 'Incorrect thumbnail',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
      trim: true,
    },
    nameEN: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
