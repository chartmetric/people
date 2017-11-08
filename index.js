const express = require('express');
const app = express();
const port = 5000;

//Models
const userModel = require('./model/user');



app.get('/users', (req, res) => {
  const {
    q,
    limit,
  } = req.query;

  userModel.searchUsers(q, limit)
  .then(data => res.send({ data }))
  .catch(error => {
    console.error(error);
    res.status(500).send({error: 'Something wrong in DB.'});
  });
});

/*
  Need a RESTful API for getting feeds by user id
*/


app.listen(port, err => console.log(`Listening on ${port}`));
