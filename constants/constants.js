const { NODE_ENV } = process.env;
const { JWT_SECRET } = process.env;
const { DATA_BASE } = process.env;

const secret = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';
const dataBase = NODE_ENV === 'production' ? DATA_BASE : 'mongodb://127.0.0.1:27017/bitfilmsdb';

const urlRegExp = /(https?:\/\/)(w{3}\.)?([a-zA-Z0-9-]{0,63}\.)([a-zA-Z]{2,4})(\/[\w\-._~:/?#[\]@!$&'()*+,;=]#?)?/;

const successCreatedCode = 201;

const wrongMovieId = 'Wrong movie id';
const wrongLoginOrPasswordMessage = 'Wrong login or password';
const wrongImage = 'Wrong image';
const wrongTrailerLink = 'Wrong trailerLink';
const wrongThumbnail = 'Wrong thumbnail';
const wrongEmail = 'Wrong email';
const wrongEmailOrPassword = 'Wrong email or password';
const wrongRequestPath = 'Wrong request path';

const bearerHeader = 'Bearer ';

module.exports = {
  secret,
  urlRegExp,
  dataBase,
  successCreatedCode,
  wrongMovieId,
  wrongLoginOrPasswordMessage,
  wrongImage,
  wrongTrailerLink,
  wrongThumbnail,
  wrongEmail,
  wrongEmailOrPassword,
  wrongRequestPath,
  bearerHeader,
};
