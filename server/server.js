// DATABASE STUFF
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require("cors");
const { Pool } = require('pg');
const port = 3000;

// parsing incoming
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//CORS to access server
app.use(cors());

//connect to PSQL
const uri = 'postgres://iyveswqm:Yd4cGP1BvqqSN3z-mxB10sFOavEPw31y@chunee.db.elephantsql.com/iyveswqm';
const pool = new Pool({
  connectionString: uri
});

// captures favs from our extension and displays them

app.post('/data', (req, res) => {
  let { image, website, title }  = req.body;
  // set default values
  if (image === undefined) image = 'https://i.postimg.cc/TY7GYn40/Blue-Scribbles-Motivational-Animated-Quote-Poster.gif';
  if (title === undefined) title = 'A Favorite Thing';

  const query = 'INSERT INTO myfavs (image, website, title) VALUES ($1, $2, $3);';
  const val = [image, website, title];
  pool.query(query, val, (err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send('Successfully added to DB!');
  })
});

app.get('/data', (req, res) => {
  const query = 'SELECT * FROM myfavs';
  pool.query(query, [], (err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(result.rows);
  });
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});