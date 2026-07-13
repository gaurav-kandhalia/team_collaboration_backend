const dotenv = require('dotenv');

dotenv.config(
    { path: './.env' }
);
const pool = require('./config/db');
const app = require('./app');




