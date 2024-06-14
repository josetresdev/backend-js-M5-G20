const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'your_jwt_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).send('Unauthorized');
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(403).send('No token provided');
  }
};

const countriesRoutes = require('./routes/countries');
const continentsRoutes = require('./routes/continents');

app.use('/countries', authenticate, countriesRoutes);
app.use('/continents', authenticate, continentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
