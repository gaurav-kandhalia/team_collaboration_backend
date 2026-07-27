const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middlewares/error.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use(errorHandler);

module.exports = app;