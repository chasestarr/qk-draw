const init = require('./init');
const AlarmClock = require('./models').alarmClock;

function findRandom(model, cb) {
  model.count({}, function(e, count) {
    const random = Math.floor(Math.random() * count);
    model.findOne().skip(random).exec(cb);
  });
}

function findNRandom(model, n, cb) {
  model.count({}, function(e, count) {
    const random = Math.floor(Math.random() * count);
    model.find().limit(n).skip(random).exec(cb);
  });
}

module.exports = { init, AlarmClock, findRandom, findNRandom };
