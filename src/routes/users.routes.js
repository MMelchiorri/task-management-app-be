const rest = require('../controllers/user.controller');

module.exports = [
  {
    method: 'get',
    tableName: 'User',
    path: '/user',
    controller: rest.list,
  },
];
