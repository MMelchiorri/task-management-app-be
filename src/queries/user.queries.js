// userQueriers.js
const userQueriers = [
  {
    createTable:
      'CREATE TABLE User (userId varchar(255) PRIMARY KEY, username varchar(255), email varchar(255), password varchar(255), userRole varchar(255))',
  },
];

module.exports = { userQueriers };
