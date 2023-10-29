const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');

const incorrectEmailMessage = 'Incorrect email';
const incorrectEmailOrPassword = 'Incorrect email or password';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: incorrectEmailMessage,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 30,
      trim: true,
    },
  },
  { versionKey: false },
);

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(incorrectEmailOrPassword));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error(incorrectEmailOrPassword));
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
