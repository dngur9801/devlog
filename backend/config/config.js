const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'devlog',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'devlog',
    host: process.env.DB_HOST,
    dialect: 'mariadb',
  },
};
