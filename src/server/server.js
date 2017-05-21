const path = require('path');
const express = require('express');

const db = require('./db');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/alarm_clocks', (req, res) => {
  db.findRandom(db.AlarmClock, (e, result) => {
    if (e) return res.status(500).end();
    res.json(result);
  });
});

const port = process.env.PORT || 3000;

db.init(e => {
  if (e) return console.log('error connecting to server');
  app.listen(port, () => console.log(`server listening on port: ${port}`));
});
