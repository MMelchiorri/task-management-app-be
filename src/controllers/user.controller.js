const db = require('../services/Database');
const { uuid } = require('uuidv4');
const tableName = 'user';

const list = async (req, res, next) => {
  try {
    const result = await db.list(tableName);
    console.log(result);
    result.length === 0
      ? res.status(200).send({ message: 'the database is empty' })
      : res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const create = async (req, res, next) => {
  try {
    req.body.userId = uuid();
    await db.create(tableName, req.body);
    res.status(200).send({ message: 'element inserted' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { list, create };
