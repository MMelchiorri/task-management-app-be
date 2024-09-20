const mysql = require('mysql2/promise');
require('dotenv').config();
const { userQueriers } = require('../queries/index');
const tableName = 'User';
class Database {
  constructor(host, user, password, database) {
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;
    this.connection = null; // To hold the DB connection
  }

  static instance = null; // Static property to hold the singleton instance

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database(
        process.env.DB_HOST,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        process.env.DB_NAME
      );
    }
    return Database.instance;
  }

  async connect() {
    if (this.connection) {
      console.log('Already connected to the database.');
      return this.connection;
    }

    console.log('Connecting to the database...');
    try {
      this.connection = await mysql.createConnection({
        host: this.host || 'localhost',
        user: this.user,
        database: this.database,
        password: this.password,
      });
      console.log('Database connected');
      const [rows] = await this.connection.query(`SHOW TABLES LIKE ?`, [
        tableName,
      ]);
      if (rows.length > 0) {
        console.log(`Tables with name ${tableName} already exists`);
      } else {
        userQueriers.some(async (userQuery) =>
          Object.keys(userQuery).includes('createTable')
            ? await this.connection.query(userQuery.createTable)
            : null
        );
      }
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }

    return this.connection;
  }
}

const db = Database.getInstance().connect();
module.exports = db;
