const db = require('../services/Database');
const tableName = 'user';

const list = async (req, res, next) => {
  const result = await db.list(tableName);
  result.length === 0
    ? res.status(200).send({ message: 'the database is empty' })
    : res.status(200).send(result);
};

module.exports = { list };
