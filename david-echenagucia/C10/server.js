const express = require('express');
const app = express();
// const dotenv = require('dotenv');

// dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});