const rest = require('../controllers/user.controller');

module.exports = [
  {
    method: 'get',
    tableName: 'user',
    path: '/users',
    controller: rest.list,
  },
  {
    method: 'post',
    tableName: 'user',
    path: '/users',
    controller: rest.create,
  },
];
