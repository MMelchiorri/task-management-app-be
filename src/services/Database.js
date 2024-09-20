const mysql = require('mysql2/promise');
require('dotenv').config();

class Database {
  constructor(host, user, password, database) {
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;
  }

  async connect() {
    console.log('Connecting to the database...');
    try {
      this.connection = await mysql.createConnection({
        host: this.host || 'localhost',
        user: this.user,
        database: this.database,
        password: this.password,
      });
      console.log('Database connected');
    } catch (error) {
      console.log(error);
    }
  }
}

const db = Object.freeze(
  new Database(
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
    process.env.DB_PASSWORD
  ).connect()
);

module.exports = db;
