const { allRoles, adminRoles } = require('../roles/roles');
const authMiddleware = (roles) => (req, res, next) => {
  roles.filter((role) => adminRoles.includes(role)).length === 0
    ? next(new Error('element not authorized'))
    : next();
  //if (roles.filter((role) => allRoles.includes(role)).length === 0) next();
};

module.exports = { authMiddleware };
