require('./services/Database');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const router = express.Router();
const { authMiddleware } = require('./middlewares/auth');
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT_APP;

routes.forEach((route) => {
  router[route.method](
    route.path,
    [authMiddleware(route.roles), route.controller].filter(
      (fn) => fn != undefined
    )
  );
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
