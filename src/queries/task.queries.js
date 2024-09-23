// userQueriers.js
const tableName = 'Task';

const task = {
  task: {
    showTables: `SHOW TABLES LIKE ${tableName}`,
    createTable: `CREATE TABLE ${tableName} (taskId varchar(255) PRIMARY KEY, taskName varchar(255), priority varchar(255), taskRole varchar(255))`,
    dropTable: `DROP TABLE ${tableName} if EXISTS`,
  },
};
module.exports = { task };
