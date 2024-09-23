// userQueriers.js
const tableName = 'User';

const user = {
  showTables: `SHOW TABLES LIKE ${tableName}`,
  createTable: `CREATE TABLE ${tableName} (userId varchar(255) PRIMARY KEY, username varchar(255), email varchar(255), password varchar(255), userRole varchar(255))`,
  list: `SELECT * FROM ${tableName}`,
  dropTable: `DROP TABLE ${tableName} if EXISTS`,
};
module.exports = { user };
