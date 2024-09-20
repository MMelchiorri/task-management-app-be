const express = require('express');
const bodyParser = require('body-parser');
const db = require('./services/Database');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT_APP;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
