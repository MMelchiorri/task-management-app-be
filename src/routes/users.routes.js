const rest = require('../controllers/user.controller');
const { allRoles, adminRoles } = require('../roles/roles');

module.exports = [
  {
    method: 'get',
    tableName: 'user',
    path: '/users',
    roles: ['user', 'admin'],
    controller: rest.list,
  },
  {
    method: 'post',
    tableName: 'user',
    path: '/users',
    roles: adminRoles,
    controller: rest.create,
  },
];
