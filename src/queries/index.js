const { userQueriers } = require('../queries/user.queries');
const { taskQueries } = require('../queries/task.queries');

const queries = [userQueriers, taskQueries];

module.exports = { queries };
