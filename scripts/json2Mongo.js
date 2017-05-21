const fs = require('fs');
const ndjson = require('ndjson');
const mongo = require('mongodb').MongoClient;

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbUrl = `mongodb://${dbUser}:${dbPassword}@ds147421.mlab.com:47421/quickdraw`;
mongo.connect(dbUrl, connection);

function connection(err, db) {
  if (err) throw err;

  fs
    .createReadStream('../data/alarmClocks.ndjson')
    .pipe(ndjson.parse())
    .on('data', function(drawing) {
      const drawingWithId = Object.assign({ _id: drawing.key_id }, drawing);
      db.collection('alarm_clocks').insertOne(drawingWithId);
      console.log(`wrote drawing from ${drawingWithId.countrycode} to db`);
    });
}
