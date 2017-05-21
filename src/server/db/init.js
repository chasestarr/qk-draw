const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbUrl = `mongodb://${dbUser}:${dbPassword}@ds147421.mlab.com:47421/quickdraw`;

module.exports = function(cb) {
  mongoose.connect(dbUrl, cb);
};
