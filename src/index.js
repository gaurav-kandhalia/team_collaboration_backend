const dotenv = require('dotenv');

dotenv.config(
    { path: './.env' }
);
const pool = require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const result = pool.query('SELECT NOW()')
    .then(res => {
        console.log('Database connected successfully:', res.rows[0]);
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
    console.log(result);

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}  );