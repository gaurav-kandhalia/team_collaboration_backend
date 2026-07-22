const dotenv = require('dotenv');

dotenv.config(
    { path: './.env' }
);
const {connectDatabse} = require('./config/db');
const app = require('./app');


const startServer = async () => {
    try {
        await connectDatabse();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1);
    }
};

startServer();


