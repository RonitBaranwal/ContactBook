const express = require('express');
const app = express();
const { connectToDb, getDb } = require('./db');
let db;
//db connection
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => console.log("listening to port"));
    db = getDb();
  }
})
app.use(express.static('./public'));
app.use(express.json());
app.post('/info', (req, res) => {
  const object = req.body;
  console.log(object);
  db.collection('Contact')
    .insertOne(object)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ err: 'error' });
    })
})
app.listen(7000, () => console.log('server started at port 7000'));


